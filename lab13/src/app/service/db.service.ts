import { Injectable } from '@angular/core';
import { Students } from '../mock-students';
import { Student } from '../student';

@Injectable()
export class DbService {
  std: Student = null;
  constructor() { }
  getData(): Student[] {

    return Students;
  }
  getStd(id: number): Student {
    for (let stds of Students) {
      if (stds.id == id) {
        this.std = stds;
        return this.std;
      }
    }
    return null;
  }
}
