import { Component } from '@angular/core';

interface TechGroup {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss',
})
export class Technologies {
  protected readonly groups: TechGroup[] = [
    { category: 'Frontend', items: ['Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind'] },
    { category: 'Backend', items: ['Node.js', 'NestJS', '.NET', 'Python', 'Java'] },
    { category: 'Mobile', items: ['Flutter', 'React Native', 'Swift', 'Kotlin'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'] },
    { category: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
  ];
}
