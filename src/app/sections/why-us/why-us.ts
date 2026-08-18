import { Component } from '@angular/core';

interface Reason {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.html',
  styleUrl: './why-us.scss',
})
export class WhyUs {
  protected readonly reasons: Reason[] = [
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7Z',
      title: 'Agile & Fast',
      description: 'Sprint-based delivery so you see progress every week, not every quarter.',
    },
    {
      icon: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.4-3a7.4 7.4 0 0 1-.1 1.2l2 1.6-2 3.4-2.4-.9a7.6 7.6 0 0 1-2 1.2L14.5 22h-5l-.4-2.5a7.6 7.6 0 0 1-2-1.2l-2.4.9-2-3.4 2-1.6a7.4 7.4 0 0 1 0-2.4l-2-1.6 2-3.4 2.4.9a7.6 7.6 0 0 1 2-1.2L9.5 2h5l.4 2.5a7.6 7.6 0 0 1 2 1.2l2.4-.9 2 3.4-2 1.6c.07.4.1.79.1 1.2Z',
      title: 'Senior Engineering Talent',
      description: 'Every project is staffed with experienced engineers, not junior trainees.',
    },
    {
      icon: 'M12 2 3 6v6c0 5.25 3.75 9.75 9 11 5.25-1.25 9-5.75 9-11V6l-9-4Z',
      title: 'Security by Design',
      description: 'Data protection and best-practice security reviews at every milestone.',
    },
    {
      icon: 'M3 3v18h18M18 9l-5 5-4-4-4 4',
      title: 'Transparent Pricing',
      description: 'Clear scopes and predictable costs &mdash; no surprise invoices.',
    },
    {
      icon: 'M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2M7 8H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2m0-14v18m10-18v18',
      title: 'Dedicated Support',
      description: 'Post-launch monitoring, maintenance and support built into every engagement.',
    },
    {
      icon: 'M4 4h16v10H5.17L4 15.17V4Z',
      title: 'Clear Communication',
      description: 'Direct access to your team via Slack, calls and weekly progress reports.',
    },
  ];
}
