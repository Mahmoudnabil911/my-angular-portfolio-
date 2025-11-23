import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements AfterViewInit {
  experiences = [
    {
      company: 'Cairah',
      position: 'Frontend Web Developer',
      type: 'Part-time',
      period: 'Jun 2025 - Present',
      duration: '6 mos',
      location: 'Remote',
      description:
        'Developing and maintaining AI-powered web interfaces using Angular, TypeScript, and SCSS, focused on performance and scalability.',
      achievements: [
        'Collaborating with designers and backend engineers to deliver responsive, user-centered dashboards',
        'Implementing GSAP animations and ScrollTrigger effects for fluid user experiences',
        'Integrating RESTful APIs and managing asynchronous data flows with RxJS Observables',
        'Optimizing front-end performance, accessibility, and maintainability with reusable components',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'SCSS',
        'GSAP',
        'ScrollTrigger',
        'RxJS',
        'REST APIs',
      ],
      // icon: '🏥',
    },
    {
      company: 'Dopave',
      position: 'Front-End Developer (Junior)',
      type: 'Full-time',
      period: 'Mar 2024 - Present',
      duration: '1 yr 9 mos',
      location: 'Cairo, Egypt',
      description:
        'Developed responsive, accessible, and high-performance web applications using Angular, TypeScript, HTML, and SCSS.',
      achievements: [
        'Built reusable UI components and optimized application performance for improved user experience',
        'Integrated RESTful APIs using RxJS Observables and HTTP Interceptors',
        'Implemented GSAP and ScrollTrigger animations to enhance interactivity',
        'Collaborated with UI/UX designers and backend teams to build scalable dashboards',
        'Utilized Git and GitHub for version control in agile environments',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'SCSS',
        'RxJS',
        'GSAP',
        'Bootstrap',
        'Git',
      ],
      // icon: '💼',
    },
    {
      company: 'Sahm',
      position: 'Frontend Web Developer',
      type: 'Internship',
      period: 'Feb 2023 - Sep 2023',
      duration: '8 mos',
      location: 'Cairo, Egypt',
      description:
        'Assisted in developing Angular-based user interfaces with responsive layouts and clean design.',
      achievements: [
        'Worked on component structure, data binding, and basic API integrations',
        'Improved understanding of state management, routing, and SCSS best practices',
        'Collaborated with development team on real-world projects',
      ],
      technologies: ['Angular', 'TypeScript', 'SCSS', 'REST APIs'],
      // icon: '🎓',
    },
    {
      company: 'HealthPay',
      position: 'Frontend Web Developer',
      type: 'Internship',
      period: 'Feb 2022 - Oct 2022',
      duration: '9 mos',
      location: 'Cairo, Egypt',
      description:
        'Contributed to front-end development using HTML, CSS, and Angular for healthcare-related web interfaces.',
      achievements: [
        'Participated in building and testing healthcare payment interfaces',
        'Learned best practices for writing clean, maintainable code',
        'Gained experience with team collaboration using Git',
      ],
      technologies: ['Angular', 'HTML5', 'CSS3', 'Git'],
      // icon: '🏥',
    },
  ];

  ngAfterViewInit(): void {
    this.animateTimeline();
  }

  animateTimeline(): void {
    gsap.from('.timeline-item', {
      scrollTrigger: {
        trigger: '.experience-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      stagger: 0.3,
      ease: 'power3.out',
    });
  }
}
