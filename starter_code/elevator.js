class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "";
  }

  start() {
    var intervalID = setInterval(update, 1000);
  }

  stop() {
    clearInterval(intervalID);
  }
  update() {

    this.log();
  }
  _passengersEnter() {}
  _passengersLeave() {}
  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor += 1;
      this.direction = "UP";
    }
    return this.floor;

  }
  floorDown() {
    if (this.floor > 0) {
      this.floor -= 1;
      this.direction = "DOWN";
    }
    return this.floor;
  }
  call(person) {
    this.requests.push(person);
  }
  log() {
    console.log("Direction : " + this.direction + "| floor: " + this.floor);
  }
}

module.exports = Elevator;

lift = new Elevator; //create a object;
for (let i = 0; i < lift.MAXFLOOR + 1; i++) {
  lift.floorUp();

  lift.update();
}
for (let i = lift.MAXFLOOR; i > -2; i--) {
  lift.floorDown();
  lift.update();
}
// for(let i = 0; i > lift.floor ;)

class Person {
  constructor(name, originFloor, destFloor)
  this.name = name;
  this.originFloor = originFloor;
  this.destFloor = destFloor;

}

tom = new Person;
lift.call(tom);
