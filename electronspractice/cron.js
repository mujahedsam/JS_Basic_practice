var cron = require('node-cron');
const notifier = require('node-notifier')
const path = require('path');
const opn = require('opn');
 
cron.schedule('1 30,59 18 * * *', function(){
 	console.log("scheduled for triggering on 6:30 & 6:59");

 	//notifier setup
 	notifier.notify ({
               title: 'LOGOUT FROM HR APPLICATION',
               message: 'Hello Mr.Mujahed!,please log out and have a good time at home,you will be redirected to login page',
               icon: path.join(__dirname,'notify.png'),  // Absolute path                  (doesn't work on balloons)
               sound: true,  // Only Notification Center or Windows Toasters
               wait: true    // Wait with callback, until user action is taken                against notification
            
            }, function (err, response) {
               // Response is response from notification
            });
 	var d = new Date();  
	var h=d.getHours(); 
	var m=d.getMinutes();  
	var s=d.getSeconds();  
	var current_time=h+":"+m;

	if(current_time=="18:59"){
	 opn('https://digitallynctech.greythr.com/login.do',{app:'Chrome'});	 
	}

 });