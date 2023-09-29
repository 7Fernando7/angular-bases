import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  get capitalizedAge(): number {
    return this.age;
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeHero(): void {
    this.name = 'Spiderman';
  }

  public changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }

}
