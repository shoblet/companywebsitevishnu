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
      title: 'Senior Frontend Engineer',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Build polished Angular and React products with a small, senior team.',
    },
    {
      title: 'Backend Engineer',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Design APIs, data models and cloud services that stay reliable at scale.',
    },
    {
      title: 'Mobile Developer',
      type: 'Full-time',
      location: 'Remote',
      description: 'Ship Flutter and native apps with a focus on performance and UX.',
    },
  ];
}
