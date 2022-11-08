import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forests',
  templateUrl: './forests.component.html',
  styleUrls: ['./forests.component.scss']
})
export class ForestsComponent implements OnInit {

  forests = [
    {
      name: 'Название дерева 1'
    },
    {
      name: 'Название дерева 2'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
