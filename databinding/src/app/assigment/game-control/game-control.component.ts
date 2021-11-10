import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output()
  gameEvent = new EventEmitter<number>();

  intervalRef;
  current: number;

  constructor() { }

  ngOnInit(): void {
  }

  run() {
    this.current++;
    this.gameEvent.emit( this.current );
  }

  onStart() {
    this.current = 0;
    this.intervalRef = setInterval(() => {
      this.run()
    }, 500);
  }

  onEnd() {
    clearInterval(this.intervalRef);
  }
}
