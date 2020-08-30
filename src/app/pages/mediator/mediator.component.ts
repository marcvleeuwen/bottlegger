import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppConstants} from "../../app.constants";

@Component({
  selector: 'app-mediator',
  templateUrl: './mediator.component.html',
  styleUrls: ['./mediator.component.scss']
})
export class MediatorComponent implements OnInit {

  constructor(private readonly router: Router) {
  }

  ngOnInit(): void {
    // Check if user is logged in
    //  true
    setTimeout(() => {
      this.navigate();
    }, 1500);
  }

  navigate(): void {
    void this.router.navigate(
      [AppConstants.appRoutes.HOME],
      {skipLocationChange: true}
    );
  }

}
