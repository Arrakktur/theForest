import { Component, OnInit } from '@angular/core';
import {IMenuTab} from "../../interfaces/menu.interface";
import {MENU_PROFILE} from "../../constants/constants";
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {userSelector} from "../../store/selectors/user.selectors";
import {GetUser} from "../../store/actions/user.action";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  menuItems: IMenuTab[] = MENU_PROFILE;
  selectedItem: string = this.menuItems[0].label;
  user$ = this.store.pipe(select(userSelector));

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new GetUser());
  }

  changeSelectedItem(selectedItem: string){
    this.selectedItem = selectedItem;
  }

}
