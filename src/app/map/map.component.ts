import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { IActivity } from '../shared/activity.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  activity: any;
  activityName: string;
  activityComments: string;
  activityDistance: number;
  gpx: any;

  constructor(
    private _mapService: MapService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activity = this._mapService.getActivity(
      +this._route.snapshot.params['id']);
  }

}
