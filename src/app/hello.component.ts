import { Component, Input } from '@angular/core';
import { Service } from './service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
  providers: [Service],
})
export class HelloComponent  {
  @Input() name: string;
}
