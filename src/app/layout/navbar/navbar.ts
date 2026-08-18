import { Component, HostListener, signal } from '@angular/core';

interface NavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly isScrolled = signal(false);
  protected readonly isMenuOpen = signal(false);

  protected readonly links: NavLink[] = [
    { label: 'Home', fragment: 'home' },
    { label: 'Services', fragment: 'services' },
    { label: 'About', fragment: 'about' },
    { label: 'Why Us', fragment: 'why-us' },
    { label: 'Technologies', fragment: 'technologies' },
    { label: 'Contact', fragment: 'contact' },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 12);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
