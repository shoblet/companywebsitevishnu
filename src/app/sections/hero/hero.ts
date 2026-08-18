import { Component } from '@angular/core';

interface HeroStat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly stats: HeroStat[] = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Happy Clients' },
    { value: '8+', label: 'Years of Expertise' },
    { value: '99%', label: 'On-time Delivery' },
  ];
}
