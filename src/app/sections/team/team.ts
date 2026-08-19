import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  photo?: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {
  protected readonly members: TeamMember[] = [
    {
      name: 'Vishnu H',
      role: 'Founder & CEO',
      bio: 'Leading Arcbyte Technologies with a focus on innovation, strategic growth, and delivering technology solutions that create meaningful business value.',
      initials: 'VH',
      photo: 'assets/team-vishnu-h.png',
    },
  ];
}
