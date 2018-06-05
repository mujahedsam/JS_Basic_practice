var addnumbers;
(function (addnumbers) {
    function add(...nums) {
        console.log(nums);
    }
    addnumbers.add = add;
    addnumbers.carname = "bmw and audi";
})(addnumbers || (addnumbers = {}));
/// <reference path = "addnumbers.ts" /> 
addnumbers.add(100, 200);
