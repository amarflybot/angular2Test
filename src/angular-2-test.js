import {ComponentMetadata as Component, ViewMetadata as View} from 'angular2/angular2';

@Component({
  selector: 'angular-2-test'
})

@View({
  templateUrl: 'angular-2-test.html'
})

export class Angular2Test {

  constructor() {
    console.info('Angular2Test Component Mounted Successfully');
  }

}
