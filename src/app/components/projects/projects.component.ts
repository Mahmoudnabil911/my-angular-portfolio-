import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements AfterViewInit {
  projects = [
    {
      title: 'Cairah',
      subtitle: 'AI Healthcare Platform',
      description:
        'Comprehensive healthcare platform with AI-powered diagnostics, patient management, and telemedicine features. Built with Angular for seamless user experience.',
      image: '🏥',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Bootstrap', 'REST API'],
      demoUrl: 'https://cairah.ai/home',
      githubUrl: '#',
      highlights: ['AI Integration', 'Real-time Updates', 'Responsive Design'],
    },
    {
      title: 'LMS',
      subtitle: 'Learning Management System',
      description:
        'Feature-rich learning platform with course management, interactive quizzes, progress tracking, and video streaming capabilities.',
      image: '📚',
      technologies: ['Angular', 'SCSS', 'RxJS', 'GSAP', 'REST API'],
      demoUrl: '#',
      githubUrl: '#',
      highlights: ['Video Streaming', 'Progress Tracking', 'Interactive UI'],
    },
    {
      title: 'Khardah Associations',
      subtitle: 'Platform for Associations',
      description:
        'Community platform for managing associations, events, memberships, and communications with advanced admin dashboard.',
      image: '🤝',
      technologies: ['Angular', 'TypeScript', 'Bootstrap', 'State Management'],
      demoUrl: '#',
      githubUrl: '#',
      highlights: ['Admin Dashboard', 'Event Management', 'User Roles'],
    },
    {
      title: 'Parq',
      subtitle: 'Parking Services Platform',
      description:
        'Smart parking solution with real-time availability, booking system, payment integration, and location-based services.',
      image: '🚗',
      technologies: ['Angular', 'Google Maps API', 'RxJS', 'Payment Gateway'],
      demoUrl: '#',
      githubUrl: '#',
      highlights: [
        'Real-time Tracking',
        'Payment Integration',
        'Maps Integration',
      ],
    },
  ];

  ngAfterViewInit(): void {
    // Temporarily disabled animation for debugging
    // this.animateProjects();
  }

  animateProjects(): void {
    // gsap.from('.project-card', {
    //   scrollTrigger: {
    //     trigger: '.projects-section',
    //     start: 'top 80%',
    //     end: 'bottom 20%',
    //     toggleActions: 'play none none none',
    //   },
    //   opacity: 0,
    //   y: 50,
    //   duration: 0.6,
    //   stagger: 0.2,
    //   ease: 'power3.out',
    // });
  }
}
