import {faker} from "@faker-js/faker"
import { Mappable } from "./CustomMap"

class User implements Mappable{
    name: string;
    location:{
        lat:number,
        lng:number
    };
    color: string = 'black'
    constructor(){
        this.name = faker.person.firstName()
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }
    markerContent(): string {
        return `
        <h3> User name : ${this.name} </h3>
        `
    }

}

google

export default User