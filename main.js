

//*****basic EXAMPLE 1***

var btn=document.getElementById("btn1");

btn.addEventListener("click",function(){


		var ourrequest=new XMLHttpRequest();

		ourrequest.open('GET',"https://learnwebcode.github.io/json-example/animals-1.json");

		ourrequest.onload=function(){
			var data=JSON.parse(ourrequest.responseText);
			//console.log(data);
			 
			console.log(data[0]);
		}

		ourrequest.send();

})




//***examle 2******* on ajax
// var btn=document.getElementById("btn1");

// btn.addEventListener("click",function(){


// 		var ourrequest=new XMLHttpRequest();

// 		ourrequest.open('GET',"https://learnwebcode.github.io/json-example/animals-1.json");

// 		ourrequest.onload=function(){
// 			var data= JSON.parse(ourrequest.responseText);
// 			console.log(data[0]);
// 		}

// 		ourrequest.send();

// })

