import { MyBaseService } from './my-base.service';

export abstract class MyBaseComponent {
  constructor(protected myBaseService: MyBaseService) {}

  protected myMethod() {}
}
