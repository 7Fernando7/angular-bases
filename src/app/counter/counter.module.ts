import { NgModule } from "@angular/core";
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  exports: [
    CounterComponent
  ],
  declarations: [
    CounterComponent
  ],
  imports: [

  ]
})
export class CounterModule {}
