import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from "rxjs/Rx";
import { Student } from "../../../student";
import { DbService } from '../../db.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit, OnDestroy {
  id: number;
  std: Student;
  private subs: Subscription;
  constructor(private route: ActivatedRoute, private router: Router, private dbService: DbService) {

  }

  ngOnInit() {
    this.subs = this.route.params.subscribe(params => {
      this.id = params['id']; console.log(this.id);
      this.std = this.dbService.getStd(this.id);
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
