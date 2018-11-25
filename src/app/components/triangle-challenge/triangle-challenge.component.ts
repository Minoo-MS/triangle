import { TriangleChallengeService } from './../../services/triangle-challenge.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-triangle-challenge",
  templateUrl: "./triangle-challenge.component.html",
  styleUrls: ["./triangle-challenge.component.scss"],
  providers:[TriangleChallengeService]
})
export class TriangleChallengeComponent implements OnInit {
  myform: FormGroup;
  side1: FormControl;
  side2: FormControl;
  side3: FormControl;

  errMsg: string = "";
  successMsg: string = "";
  constructor(private triangleChallengeService :TriangleChallengeService) {}

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.side1 = new FormControl("", Validators.required);
    this.side2 = new FormControl("", Validators.required);
    this.side3 = new FormControl("", Validators.required);
  }
  createForm() {
    this.myform = new FormGroup({
      side1: this.side1,
      side2: this.side2,
      side3: this.side3
    });
  }

 
  triangleType(side1, side2, side3): void {
    if (this.triangleChallengeService.AllSidesAreEqual(side1, side2, side3)) {
      this.successMsg = "The triangle is equilateral";
    } else if (this.triangleChallengeService.AtLeastTwoSideAreEqual(side1, side2, side3)) {
      this.successMsg = "The triangle is isoceles";
    } else {
      this.successMsg = "The triangle is scalene";
    }
  }

 
  onSubmit() {
    debugger;
    this.successMsg = "";
    this.errMsg = "";
    if (
      this.triangleChallengeService.checkCondition(this.side1.value, this.side2.value, this.side3.value)
    ) {
      this.triangleType(this.side1.value, this.side2.value, this.side3.value);
    } else {
      this.errMsg = "Not a triangle";
    }
    this.myform.reset();
    
  }
}
