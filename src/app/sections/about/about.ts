import { Component } from '@angular/core';

interface AboutPoint {
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly points: AboutPoint[] = [
    {
      title: 'Experienced engineering team',
      description: 'Senior developers, architects and designers who obsess over quality.',
    },
    {
      title: 'Transparent collaboration',
      description: 'Weekly demos, shared roadmaps and clear communication at every step.',
    },
    {
      title: 'Security & scalability first',
      description: 'Best practices baked in from day one, so you never outgrow your stack.',
    },
  ];
}
