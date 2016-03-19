class Mammal{
	constructor(){
		this.type = 'Mammal [super class!!!?]';
		this.hasFurr = true;
	}

	toString(){
		return this.type+' has Furr';
	}

	setName(newName){
		this.name = newName;
	}
}

class Dog extends Mammal{
 constructor(){
 	super();
 	this.name = "doge";
 }
}

class Cat extends Mammal{
	constructor(color){
		super();
		this.color = color;
		this.name = "cate";
	}

	toString(){
		return "this is the toString for class: "+this.constructor.name+" (instance = "+this.name+")";
	}
}

let dog = new Dog("keshet"),
	cat = new Cat("kitty","blue"),
	myMap = new Map();

	myMap.set("dog",dog);