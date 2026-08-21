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
    {
      category: 'Frontend',
      items: [
        'Angular',
        'React',
        'Vue.js',
        'JavaScript',
        'TypeScript',
        'HTML5',
        'CSS3',
        'SCSS',
        'Bootstrap',
        'Tailwind CSS',
      ],
    },
    { category: 'Backend', items: ['Node.js', 'NestJS', '.NET', 'Python', 'Java', 'PHP', 'REST APIs', 'GraphQL'] },
    { category: 'Mobile', items: ['Flutter', 'React Native', 'Android', 'iOS'] },
    {
      category: 'Cloud & DevOps',
      items: [
        'Microsoft Azure',
        'AWS',
        'Google Cloud',
        'Docker',
        'Kubernetes',
        'Jenkins',
        'GitHub Actions',
        'GitLab CI/CD',
        'Terraform',
      ],
    },
    { category: 'Database', items: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'] },
  ];
}
