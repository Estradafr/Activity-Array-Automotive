//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maxPassangers = 5;
    this.passanger = 0;
    this.numbOfWeheels = 4;
    this.topSpeed = 160;
    this.fuel = 10;
    this.scheduleService === false;
  }

  start() {
    if (this.fuel > 0) {
      return this.started == true;
      console.log("You turned on the engine.")
    } else {
      return this.started == false;
      console.log("You forgot to get gas!")
    }
  }

  scheduleService() {
    if (this.mileage > 30000) {
      this.scheduleService == true;
      return this.scheduleService;
    }
  }

  loadPassanger(number) {
    if (this.passanger < this.maxPassangers) {
      if ((num + this.passanger) <= this.maxPassangers) {
        this.passanger = number;
        return this.passanger;
      } else {
        console.log(this.model + " " + this.make + " does not have enough space to take all the passengers.");

      }
    } else {
      console.log("The " + this.model + " " + this.make + " is full");
    }
  }
}

let myCar = new Car('Dodge', 'Charger GT', '2019', 'Dark grey', '55000')

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)
