let cat = {
    length: 0.5,
    age : 10,
    eat : function(){
    }
    
};

class Cat {
    constructor(length, age){
        this.length = length;
        this.age = age;
    }
    eat(){

    }
}
var cat1 = new Cat(0.5, 5);
console.log(cat1);

var cat2 = new Cat(0.6, 6);
console.log(cat2);