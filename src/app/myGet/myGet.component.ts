import {Component, OnInit} from '@angular/core';
import {MyGetService} from './myGet.service';



@Component({
  selector: 'app-myget',
  templateUrl: './myGet.component.html',
  styleUrls: ['./myGet.component.css']
})
export class MyGetComponent implements OnInit {

  public data: any;


  constructor(private myGetService: MyGetService) {
  }

  ngOnInit() {
    this.myGetService.getSomething().subscribe(data => this.data = data);
  }
}
