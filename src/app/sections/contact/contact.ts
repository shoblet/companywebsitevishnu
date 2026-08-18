import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactModel {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly model: ContactModel = {
    name: '',
    email: '',
    company: '',
    message: '',
  };

  protected readonly isSubmitted = signal(false);

  protected readonly contactInfo: ContactInfo[] = [
    {
      icon: 'M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0Z',
      label: 'Office',
      value: 'Trivandrum, Kerala',
    },
    {
      icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z',
      label: 'Phone',
      value: '8848271050',
    },
    {
      icon: 'M4 4h16v16H4V4Zm0 0 8 8 8-8',
      label: 'Email',
      value: 'info@arcbytetechnologies.com',
    },
  ];

  onSubmit(form: { valid: boolean | null }): void {
    if (!form.valid) {
      return;
    }
    this.isSubmitted.set(true);
  }
}
