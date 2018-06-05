var global_num = 20; //global variable
var mynumbers = (function () {
    function mynumbers() {
        this.numvalue = 13; //class varibale
    }
    mynumbers.prototype.storenumber = function () {
        var localnumber = 90;
    };
    mynumbers.svalue = 40; //static filed
    return mynumbers;
}());
console.log("this is global number" + global_num);
console.log(mynumbers.svalue);
var nobj = new mynumbers();
console.log(nobj.numvalue);
