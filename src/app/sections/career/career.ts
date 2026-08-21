import { Component } from '@angular/core';

interface JobOpening {
  title: string;
  type: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-career',
  templateUrl: './career.html',
  styleUrl: './career.scss',
})
export class Career {
  protected readonly openings: JobOpening[] = [
    {
      title: 'Senior Angular Developer',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Build polished Angular and React products with a small, senior team.',
    },
  ];
}
