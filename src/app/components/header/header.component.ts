import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {userSelector} from "../../store/selectors/user.selectors";
import {GetUser} from "../../store/actions/user.action";
import {IMenuItem} from "../../interfaces/menu.interface";
import {MENU_ITEMS} from "../../constants/constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: IMenuItem[] = MENU_ITEMS;
  user$ = this.store.pipe(select(userSelector));

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store.dispatch(new GetUser());
  }
}
