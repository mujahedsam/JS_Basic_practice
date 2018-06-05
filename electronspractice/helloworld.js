//console.log("this is output");
const opn = require('opn');
const notifier = require('node-notifier')
const path = require('path');
opn('https://digitallynctech.greythr.com/login.do',{app:'Chrome'});


notifier.notify ({
               title: 'LOGOUT FROM HR APPLICATION',
               message: 'Hello Mr.Mujahed!,please log out and have a good time at home,you will be redirected to login page',
               icon: path.join(__dirname,'notify.png'),  // Absolute path                  (doesn't work on balloons)
               sound: true,  // Only Notification Center or Windows Toasters
               wait: true    // Wait with callback, until user action is taken                against notification
            
            }, function (err, response) {
               // Response is response from notification
            });

console.log("in theh file end");