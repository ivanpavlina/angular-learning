import {Injectable} from "@angular/core";

@Injectable()
export class CounterService {
  activeToInactiveCount: number = 0;
  inactiveToActiveCount: number = 0;

  activeToInactive() {
    this.activeToInactiveCount++;
    console.log("ActiveToInactive -> " + this.activeToInactiveCount);
  }

  inactiveToActive() {
    this.inactiveToActiveCount++;
    console.log("InactiveToActive -> " + this.inactiveToActiveCount);
  }
}
