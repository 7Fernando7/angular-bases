import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { HeroesListComponent } from './list/heroes-list/heroes-list.component';
import { HeroComponent } from './heroes-hero/heroes-hero.component';

@NgModule({
  exports: [
    HeroComponent,
    HeroesListComponent,
  ],
  declarations: [
    HeroComponent,
    HeroesListComponent,
  ],
  imports: [
    CommonModule
  ]
})

export class HeroesModule {}
