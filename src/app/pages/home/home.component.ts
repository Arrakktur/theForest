import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {INews} from "../../interfaces/news.interface";
import {RequestService} from "../../services/requestService.service";
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {newsSelector} from "../../store/selectors/news.selectors";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  newsList$ = this.store.pipe(select(newsSelector));

  constructor(private requestService: RequestService, private store: Store<IAppState>) {
  }

  ngOnInit(): void {

  }
}
