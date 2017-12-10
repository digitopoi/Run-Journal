import { SAVED_ACTIVITIES } from './../shared/activities';
import { Injectable } from '@angular/core';
import { IActivity } from '../shared/activity.model';

@Injectable()
export class ActivityService {

  constructor() { }

  getActivities(): IActivity[] {
    return SAVED_ACTIVITIES.slice(0);
  }

  getTotalActivities(allActivities: IActivity[]) {
    return allActivities.length;
  }

  getTotalDistance(allActivities: IActivity[]) {
    let totalDistance = 0;
    for (let i = 0; i < allActivities.length; i++) {
      totalDistance += allActivities[i].distance;
    }
    return totalDistance;
  }

}
