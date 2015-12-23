import {Component, View, bootstrap} from 'angular2/angular2';
import {Angular2Test} from 'angular-2-test';

@Component({
  selector: 'main'
})

@View({
  directives: [Angular2Test],
  template: `
    <angular-2-test></angular-2-test>
  `
})

class Main {

}

bootstrap(Main);
