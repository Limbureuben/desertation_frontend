import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Map, MapStyle, config } from '@maptiler/sdk';

import '@maptiler/sdk/dist/maptiler-sdk.css';

@Component({
  selector: 'app-map',
  standalone: false,
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
map: Map | undefined;

@ViewChild('map')
private mapContainer!: ElementRef<HTMLElement>;

ngOnInit(): void {
  config.apiKey = '9rtSKNwbDOYAoeEEeW9B';
}

ngAfterViewInit() {
  const initialState = { lng: 139.753, lat: 35.6844, zoom: 14 };

  this.map = new Map({
    container: this.mapContainer.nativeElement,
    style: MapStyle.STREETS,
    center: [initialState.lng, initialState.lat],
    zoom: initialState.zoom
  });
}

ngOnDestroy() {
  this.map?.remove();
}

}
