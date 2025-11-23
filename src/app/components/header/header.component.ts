import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  scrollProgress = 0;
  isDarkMode = true;
  isMenuOpen = false;

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    this.isScrolled = scrollTop > 50;
    this.scrollProgress = (scrollTop / scrollHeight) * 100;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  @HostListener('window:resize', [])
  onResize(): void {
    // Ensure menu is closed when switching to larger screens
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}
