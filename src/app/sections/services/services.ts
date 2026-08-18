import { Component } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  description: string;
  gif?: 'web' | 'mobile' | 'cloud' | 'software' | 'design' | 'qa' | 'ai';
}

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly services: Service[] = [
    {
      icon: 'M4 6h16M4 12h16M4 18h7',
      title: 'Web Development',
      description:
        'Fast, secure and scalable web applications built with modern frameworks and clean architecture.',
      gif: 'web',
    },
    {
      icon: 'M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z',
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences.',
      gif: 'mobile',
    },
    {
      icon: 'M3 15a4 4 0 0 0 4 4h10a4 4 0 0 0 0-8 5 5 0 0 0-9.6-1.6A4 4 0 0 0 3 15Z',
      title: 'Cloud & DevOps',
      description:
        'Cloud architecture, CI/CD pipelines and infrastructure automation on AWS, Azure and GCP.',
      gif: 'cloud',
    },
    {
      icon: 'M12 3v3M12 18v3M3 12h3M18 12h3M6.2 6.2l2.1 2.1M15.7 15.7l2.1 2.1M17.8 6.2l-2.1 2.1M8.3 15.7l-2.1 2.1M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z',
      title: 'AI & Automation',
      description:
        'Intelligent workflows, AI-assisted products and process automation that save time and scale with you.',
      gif: 'ai',
    },
    {
      icon: 'M12 2 3 7l9 5 9-5-9-5ZM3 12l9 5 9-5M3 17l9 5 9-5',
      title: 'Custom Software',
      description:
        'Bespoke enterprise software tailored to your workflows, from ERPs to internal tooling.',
      gif: 'software',
    },
    {
      icon: 'M7 21a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h6l6 6v8a4 4 0 0 1-4 4H7Z',
      title: 'UI/UX Design',
      description:
        'Human-centered product design that balances aesthetics with usability and conversion.',
      gif: 'design',
    },
    {
      icon: 'M9 12l2 2 4-4m5-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
      title: 'QA & Testing',
      description:
        'Automated and manual testing pipelines that keep your releases stable and bug-free.',
      gif: 'qa',
    },
  ];
}
