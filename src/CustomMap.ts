export interface Mappable {
    location: {
        lat: number,
        lng: number
    }
    markerContent(): string
    color : string
}
class CustomMap {
    private googleMap: google.maps.Map
    constructor(divId : string){
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }
    addMarker(object : Mappable) : void{
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: object.location
        })
        
        // pop up message
        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: object.markerContent()
            })

            infoWindow.open(this.googleMap, marker)
        })
    }

    
}

export default CustomMap