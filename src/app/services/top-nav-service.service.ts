import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopNavServiceService {
  public navParentName: BehaviorSubject<string> = new BehaviorSubject("");

  constructor() { }

  topNavStorageReset() {
    localStorage.removeItem('topNavData');
    localStorage.removeItem('topNavParent');
  }


}
