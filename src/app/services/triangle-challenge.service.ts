import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class TriangleChallengeService {

constructor() {

 }
 checkCondition(side1, side2, side3): boolean {
  if (
    side1 <= 0 ||
    side2 <= 0 ||
    side3 <= 0 ||
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1
  ) {
    return false;
  } else {
    return true;
  }
}
AllSidesAreEqual(side1, side2, side3): boolean {
  return side1 == side2 && side2 == side3;
}
AtLeastTwoSideAreEqual(side1, side2, side3): boolean {
  return side1 == side2 || side2 == side3 || side1 == side3;
}

}
