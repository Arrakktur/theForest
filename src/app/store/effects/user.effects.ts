import { Injectable } from "@angular/core";
import {Actions, createEffect, Effect, ofType} from "@ngrx/effects";
import {EUserActions, GetUser} from "../actions/user.action";
import {map, switchMap} from "rxjs";
import {IAppState} from "../state/app.state";
import {Store} from "@ngrx/store";

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private store: Store<IAppState>) {}
}
