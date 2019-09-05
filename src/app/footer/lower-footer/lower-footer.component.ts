import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lower-footer',
  templateUrl: './lower-footer.component.html',
  styleUrls: ['./lower-footer.component.scss']
})
export class LowerFooterComponent implements OnInit {

  constructor() { }

  year:number = (new Date).getFullYear();

  ngOnInit() {
  }

}
