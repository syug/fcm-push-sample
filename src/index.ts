import { NotificationManager } from './notification-manager';
declare var Notification: any;

// function component() {
//   var element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = 'hello worldddd!';

//   return element;
// }

// document.body.appendChild(component());

window.onload = function () {
  console.log(NotificationManager.permission);
  const requestBtn = document.getElementById('button-request');
  const statusBtn = document.getElementById('button-status');
  if (requestBtn) {
    requestBtn.addEventListener('click', (e) => {
      NotificationManager.notifyMe();
    });
  }
  if (statusBtn) {
    statusBtn.innerHTML = NotificationManager.permission;
    if (NotificationManager.permission != 'granted') {
      statusBtn.className = 'mdl-button';
    }
    statusBtn.addEventListener('click', function () {
      window.open(document.URL + "sample.html", "_blank",
        "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
    });
  }
};