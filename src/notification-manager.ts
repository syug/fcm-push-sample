/**
 * notification-manager.ts
 */
declare var Notification: any;

export class NotificationManager {
  constructor() { }

  public static get permission(): NotificationPermission {
    return Notification.permission;
  }

  public static notifyMe(): void {
    // ブラウザが通知をサポートしているか確認する
    if (!("Notification" in window)) {
      alert("このブラウザはシステム通知をサポートしていません");
    }

    // すでに通知の許可を得ているか確認する
    else if (this.permission === "granted") {
      // 許可を得ている場合は、通知を作成する
      console.log(document.URL + " : already granted");
      var notification = new Notification("Hi there!");
    }

    // 許可を得ていない場合は、ユーザに許可を求めなければならない
    else if (this.permission !== 'denied') {
      console.log(document.URL + " : not denied");
      Notification.requestPermission(function (permission) {
        // ユーザが許可した場合は、通知を作成する
        if (permission === "granted") {
          console.log(document.URL + " : granted");
          var notification = new Notification("Hi there!");
        }
      });
    } else {
      console.log(document.URL + " : maybe denied");
    }
  }
}