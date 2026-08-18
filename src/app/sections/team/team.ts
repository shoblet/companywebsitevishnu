import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {
  protected readonly members: TeamMember[] = [
    {
      name: 'Amina Rahman',
      role: 'Founder & CEO',
      bio: 'Sets the vision and partners with clients to turn product ideas into lasting software.',
      initials: 'AR',
    },
    {
      name: 'Daniel Okonkwo',
      role: 'Chief Technology Officer',
      bio: 'Leads architecture, engineering standards and the technical direction of every engagement.',
      initials: 'DO',
    },
    {
      name: 'Sofia Alvarez',
      role: 'Head of Product Design',
      bio: 'Shapes product experience so our software is as clear to use as it is solid to build.',
      initials: 'SA',
    },
    {
      name: 'James Patel',
      role: 'Engineering Manager',
      bio: 'Keeps delivery moving with senior talent, tight feedback loops and honest communication.',
      initials: 'JP',
    },
  ];
}
