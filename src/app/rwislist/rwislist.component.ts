import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';

import { GetRWISStationsService } from '../getrwisstations.service';

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

@Component({
  selector: 'app-rwislist',
  templateUrl: './rwislist.component.html',
  styleUrls: ['./rwislist.component.css']
})

export class RwislistComponent implements OnInit {
  stations : Station[] = [];
  tableHeaders = [
  'station',
  'county',
  'direction',
  'elevation',
  'district',
  'essNumTemperatureSensors',
  'inService',
  'latitude',
  'longitude',
  'locationName',
  'milepost',
  'nearbyPlace',
  'route']


  // <td>{{ob.station}}</td>
  // <td>{{ob.county}}</td>
  // <td>{{ob.direction}}</td>
  // <td>{{ob.elevation}}</td>
  // <td>{{ob.district}}</td>
  // <td>{{ob.essNumTemperatureSensors}}</td>
  // <td>{{ob.inService}}</td>
  // <td>{{ob.latitude}}</td>
  // <td>{{ob.longitude}}</td>
  // <td>{{ob.locationName}}</td>
  // <td>{{ob.milepost}}</td>
  // <td>{{ob.nearbyPlace}}</td>
  // <td>{{ob.route}}</td>

  constructor(private getRwisStations: GetRWISStationsService) {  }

  ngOnInit() {
    this.getStations();
  }

  getStations(): void {
    this.getRwisStations.getStations().subscribe(stations => this.generateArray(stations));
  }

  generateArray(obj): void {
    const temp : any[] = Object.keys(obj).map((key)=>{ return obj[key]});
    this.generateArray2(temp[0]);
  }

  generateArray2(obj): void {
    const temp : Station[] = Object.keys(obj).map((key)=>{ return obj[key]});
    this.stations = temp;
    console.log(this.stations)
  }

  sort(colName) {
    this.stations = this.stations.sort((a, b) => {
      if (typeof(a[colName]) === 'string') {
        var x = a[colName].toLowerCase();
        var y = b[colName].toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;}
      else {
        return b - a
      }})
  }

  // sortData(sort: Sort) {
  //   const data = this.stations.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.sortedData = data;
  //     return;
  //   }
  //   // console.log(sort)
  //
  //   this.sortedData = data.sort((a, b) => {
  //     const isAsc = sort.direction === 'asc';
  //     switch (sort.active) {
  //       case 'name': return compare(a.name, b.name, isAsc);
  //       case 'calories': return compare(a.calories, b.calories, isAsc);
  //       case 'fat': return compare(a.fat, b.fat, isAsc);
  //       case 'carbs': return compare(a.carbs, b.carbs, isAsc);
  //       case 'protein': return compare(a.protein, b.protein, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }
}
