import {Component, OnInit} from '@angular/core';
import {FooService} from './foo.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  public teams = [];

  constructor(private fooService: FooService) {
  }

  ngOnInit() {
    this.fooService.getTeams().subscribe(data => this.teams = data);
  }
}
