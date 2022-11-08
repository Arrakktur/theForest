import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppState} from "../store/state/app.state";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy{
  private authenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private store: Store<IAppState>) {}

  ngOnDestroy() {
    this.authenticated$.next(true);
    this.authenticated$.complete();
  }

  get authenticated(): boolean{
    return this.authenticated$.getValue();
  }

  private set authenticated(isAuthenticated: boolean){
    this.authenticated$.next(isAuthenticated);
  }
}
