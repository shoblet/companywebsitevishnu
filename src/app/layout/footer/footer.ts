import { Component } from '@angular/core';

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  protected readonly columns: FooterColumn[] = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Meet the Team', href: '#team' },
        { label: 'Career', href: '#career' },
        { label: 'Why Us', href: '#why-us' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Web Development', href: '#services' },
        { label: 'Mobile Apps', href: '#services' },
        { label: 'Cloud & DevOps', href: '#services' },
        { label: 'AI & Automation', href: '#services' },
      ],
    },
  ];
}
