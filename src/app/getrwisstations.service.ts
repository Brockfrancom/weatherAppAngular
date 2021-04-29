import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Station {
  station: string;
  county: string;
  direction: string;
  elevation: number;
  district: number;
  essNumTemperatureSensors: number;
  inService: boolean;
  latitude: number;
  longitude: number;
  locationName: string;
  milepost: number;
  nearbyPlace: string;
  route: string;
}

@Injectable({
  providedIn: 'root'
})



export class GetRWISStationsService {

  private stationsUrl = 'http://129.123.24.232:8080/data/rwis_locations.json';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET stations from the server */
  getStations(): Observable<Station[]> {
    return this.http.get<Station[]>(this.stationsUrl)
  }
  // getStations$ = this.http.get<[]>(this.stationsUrl)
  // Notes:

  // next
  // error
  // complete

/**
tap logs stuff




**/




}
