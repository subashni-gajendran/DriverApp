import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  waypoints: any;
  start = 'Halifax, NS';
  end = 'Vancouver, BC';
  waypts: waypts[] = new Array();
   directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 6,
      center: {lat: 41.85, lng: -87.65}
    });

    this.directionsDisplay.setMap(this.map);
  }

  calculateAndDisplayRoute() {
  console.log(this.waypoints1);
  this.waypts =[];
 
   
         if(this.waypoints1){
         this.waypts.push({
              location: this.waypoints1,
              stopover: true
            });
            }

   if(this.waypoints2){    
         this.waypts.push({
              location: this.waypoints2,
              stopover: true
            });
           }
            
            if(this.waypoints3) {   
         this.waypts.push({
              location: this.waypoints3,
              stopover: true
            });
            }
            if(this.waypoints4) {
         this.waypts.push({
              location: this.waypoints4,
              stopover: true
            });
            }
            if(this.waypoints5){
         this.waypts.push({
              location: this.waypoints5,
              stopover: true
            });
            }
   
console.log(this.waypts);

    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      waypoints: this.waypts,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);

      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}


