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
    this.httpService.getMyData('http://jsonplaceholder.typicode.com/users/1').map(data => data.json())
      .subscribe(
      data1 => {
        this.user.username = data1.username;
        this.user.email = data1.email;
      },
      error => console.log(error),
      () => this.getPost()
      )

  }
  getPost() {
    this.httpService.getMyData('http://jsonplaceholder.typicode.com/posts?userId=1').map(data => data.json())
      .subscribe(
      data1 => {
        for (let dd of data1) {
          this.user.post = dd.body;
        }

      },
      error => console.log(error),
      () => console.log("Completed")
      )
  }

}
