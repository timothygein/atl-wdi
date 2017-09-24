console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name, creatureType){
      this.name = name;
      this.creatureType = creatureType;
      this.foodInTummy = 10;
      this.restedness = 10;
      this.health = 10;
    }

//create new Tamagotchis
var bob = new Tamagotchi('bob', 'blah')
bob.start();

//test out your Tamagotchies below via console.logs
console.log("WAAAH!!!!!!");
console.log(this.name + ' has current food in tummy = ' + this.foodInTummy);
console.log("Starting " + this.name);
console.log("Stopping " + this.name);
console.log(this.name + ' has current restedness = ' + this.restedness);
