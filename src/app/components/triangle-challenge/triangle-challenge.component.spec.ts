import { TriangleChallengeService } from "./../../services/triangle-challenge.service";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TriangleChallengeComponent } from "./triangle-challenge.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("TriangleChallengeComponent", () => {
  let component: TriangleChallengeComponent;
  let fixture: ComponentFixture<TriangleChallengeComponent>;
  let debug: DebugElement;
  let element = HTMLElement;
  let service: TriangleChallengeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TriangleChallengeComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [TriangleChallengeService]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(TriangleChallengeComponent);
        component = fixture.componentInstance; //trianglechallenge test component
        component.ngOnInit();
        debug = fixture.debugElement.query(By.css("form"));
        element = debug.nativeElement;
        service = debug.injector.get(TriangleChallengeService);
      });
  }));

  it("should call the OnSubmit method", async(() => {
    fixture.detectChanges();
    spyOn(component, "onSubmit");
    let button = fixture.debugElement.nativeElement.querySelector("button");
    button.click();
    fixture.whenStable().then(() => {
      expect(component.onSubmit).toHaveBeenCalledTimes(0);
    });
  }));
  it("form invalid when empty", () => {
    expect(component.myform.valid).toBeFalsy();
  });
  it("form should be invalid", async(() => {
    component.myform.controls["side1"].setValue("");
    component.myform.controls["side2"].setValue("");
    component.myform.controls["side3"].setValue("");
    expect(component.myform.valid).toBeFalsy();
  }));
  it("form should be valid", async(() => {
    component.myform.controls["side1"].setValue("2");
    component.myform.controls["side2"].setValue("2");
    component.myform.controls["side3"].setValue("3");
    expect(component.myform.valid).toBeTruthy();
  }));
  it("side1 field validity", () => {
    let errors = {};
    let side1 = component.myform.controls["side1"];
    errors = side1.errors || {};
    expect(errors["required"]).toBeTruthy();
  });
  it("side2 field validity", () => {
    let errors = {};
    let side2 = component.myform.controls["side2"];
    errors = side2.errors || {};
    expect(errors["required"]).toBeTruthy();
  });
  it("side3 field validity", () => {
    let errors = {};
    let side3 = component.myform.controls["side3"];
    errors = side3.errors || {};
    expect(errors["required"]).toBeTruthy();
  });
  it("should check condition and it is not a triangle", () => {
    expect(service.checkCondition(1, 0, 2)).toBeFalsy();
  });
  it("should define triangle type and it is equilateral", () => {
    expect(service.AllSidesAreEqual(3, 3, 3)).toBeTruthy();
  });
  it("should define triangle type and it is isoceles", () => {
    expect(service.AtLeastTwoSideAreEqual(3, 4, 3)).toBeTruthy();
  });
});
