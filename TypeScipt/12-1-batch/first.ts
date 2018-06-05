 var global_num=20; //global variable

 class mynumbers{
     numvalue=13; //class varibale
     static svalue=40; //static filed

     storenumber(){ //local variable
         var localnumber=90;
     }
 }

 console.log("this is global number"+global_num);
 console.log(mynumbers.svalue);
 var nobj=new mynumbers();
 console.log(nobj.numvalue);
 

