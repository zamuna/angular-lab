import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MyhttpServiceService } from './myhttp-service.service';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form';
  user = {
    uId: '',
    username: '',
    email: '',
    post: ''
  }
  myformGrp: FormGroup;
  constructor(private formBuilder: FormBuilder, private httpService: MyhttpServiceService) {
    this.myformGrp = formBuilder.group({
      'username': ['Zamuna', [Validators.required]],
      'email': ['example@a.com', [Validators.required, Validators.email
        // Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      'post': ['Post here', [Validators.minLength]]
    });
    this.myformGrp.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }
  onSubmit() {
    console.log(this.myformGrp);
  }
  getData() {
    this.httpService.getMyData()
      .subscribe(
      data1 => {
        this.user.username = data1[0].username;
        this.user.email = data1[0].email;
        this.user.post=data1[1][Math.floor(Math.random() * data1[1].length)].body;
        console.log("post"+this.user.post);
      },
      error => console.log(error),
      () =>console.log("completed")
      )

  }


}
