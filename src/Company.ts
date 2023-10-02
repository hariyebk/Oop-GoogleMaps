import {faker} from "@faker-js/faker"
class Company{
    companyName: string
    catchPhrase: string
    location : {
        lat: number,
        lng: number
    }
    constructor(){
        this.companyName = faker.company.name()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }

}

export default Company