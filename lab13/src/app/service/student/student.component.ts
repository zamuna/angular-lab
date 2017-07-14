import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Student } from '../../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  stds: Student[];
  constructor(private dbService: DbService) {
    this.stds = this.dbService.getData();
  }

  ngOnInit() {

  }

}
