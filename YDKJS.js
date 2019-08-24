const inc =(function(){
    
    return function inc1(number,value=1){
        return number+value;
    };
})();
var x = (function bar(n=1){
    return n;
})();
console.log(x);
