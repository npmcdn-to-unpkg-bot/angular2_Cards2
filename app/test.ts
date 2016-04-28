import {Component, Directive, Input, 
  ViewContainerRef, TemplateRef, ContentChildren, QueryList} from 'angular2/core';

@Directive({
  selector: '[card]'
})
export class Card {
  @Input() title: string;
  
  constructor(public viewContainer: ViewContainerRef, public templateRef: TemplateRef){
    console.log('Card created.');
    
    var randomNumber = Math.round(Math.random());
    if(randomNumber == 1){
      this.viewContainer.createEmbeddedView(this.templateRef);
      console.log(templateRef);
    }
  }
}

@Component({
  selector: 'test',
  templateUrl: 'app/test.html',
  directives: [Card]
})
export class Test {
  constructor() {
    console.log('Test created');
  }
}