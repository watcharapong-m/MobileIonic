import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMapOptions, GoogleMapsEvent, GoogleMaps } from '@ionic-native/google-maps';

@Component({
  selector: 'app-mymap',
  templateUrl: './mymap.page.html',
  styleUrls: ['./mymap.page.scss'],
})
export class MymapPage implements OnInit {
  map: any;
  // @ViewChild
  constructor() { this.initMap(); }

  ngOnInit() {
  }

  initMap() {

    const mapOptions: GoogleMapOptions = {
    camera: {
    target: {
    lat: 43.0741904,
    lng: -89.3809802
    },
    zoom: 18,
    tilt: 30
    }
    };
    this.map = GoogleMaps.create('map_canvas',
    mapOptions);
    this.map.one(GoogleMapsEvent.MAP_READY)
.then(() => {
this.map.addMarker({
title: 'Ionic',
icon: 'blue',
animation: 'DROP',
position: {
lat: 43.0741904,
lng: -89.3809802
}
})
.then(marker => {
marker.on(GoogleMapsEvent.MARKER_CLICK)
.subscribe(() => {
});
});

});
}}
