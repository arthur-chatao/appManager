import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-redefinir',
  templateUrl: './redefinir.page.html',
  styleUrls: ['./redefinir.page.scss'],
})
export class RedefinirPage implements OnInit {


  email = "user@example.com";


  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  redefinir(){
    this.afAuth.auth.sendPasswordResetEmail(this.email);
    this.router.navigate(['home']);

}
}
