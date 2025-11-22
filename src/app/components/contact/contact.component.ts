import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements AfterViewInit {
  contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'mahmodnabil2328@gmail.com',
      link: 'mailto:mahmodnabil2328@gmail.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+201027197422',
      link: 'tel:+201027197422',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Mahmoud Nabil',
      link: 'https://linkedin.com/in/mahmoud-nabil',
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'mahmoudnabil',
      link: 'https://github.com/mahmoudnabil',
    },
  ];

  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  ngAfterViewInit(): void {
    // Temporarily disabled animation for debugging
    // this.animateContact();
  }

  animateContact(): void {
    // gsap.from('.contact-card', {
    //   scrollTrigger: {
    //     trigger: '.contact-section',
    //     start: 'top 80%',
    //     end: 'bottom 20%',
    //     toggleActions: 'play none none reverse',
    //   },
    //   opacity: 0,
    //   y: 30,
    //   duration: 0.6,
    //   stagger: 0.1,
    //   ease: 'power3.out',
    // });
    // gsap.from('.contact-form', {
    //   scrollTrigger: {
    //     trigger: '.contact-section',
    //     start: 'top 80%',
    //     end: 'bottom 20%',
    //     toggleActions: 'play none none reverse',
    //   },
    //   opacity: 0,
    //   x: 50,
    //   duration: 0.8,
    //   ease: 'power3.out',
    // });
  }

  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    alert('Thank you for your message! I will get back to you soon.');
    // Reset form
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }
}
