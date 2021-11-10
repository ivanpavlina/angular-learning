import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, AfterContentInit {

  @ContentChild('contentParagraph')
  paragraph: ElementRef;

  @Input("srvElement")
  element: {
    type: string,
    name: string,
    content: string
  };

  constructor() {
    console.log("constructor");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

}
