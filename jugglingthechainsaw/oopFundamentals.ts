
export interface IVehicle {
    _speed: any;

    printVehicleType(): any;

    increaseSpeed(value: any): any;
}

export abstract class Vehicle implements IVehicle{

    _speed: any

    public increaseSpeed(value: any){
        this._speed = value
    }

    public get value() : any {
        return this._speed;
    }

    public set value(v : any) {
        if(v != 100)
        this._speed = v;
    }

    public printVehicleType() {
        console.log("I'm vehicle")
    } 
} 

export class Car extends Vehicle {
    public printVehicleType(){
        console.log("I'm car")
    }
} 

export class Scooter extends Vehicle {
    public printVehicleType(){
        console.log("I'm scooter")
    }
}


function driveCar(){

    let car = new Car()

    car.increaseSpeed(100)
    car.printVehicleType() //car 

    let scooter = new Scooter()

    car.increaseSpeed(30)
    car.printVehicleType() //scooter 

    printType(car)

    printType(scooter)
}

function printType(vehicle: IVehicle){
    
    vehicle.printVehicleType()
}