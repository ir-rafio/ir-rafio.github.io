import type { LogoId } from './logos';

export type Education = {
  level: string;
  school: string;
  degree: string;
  result: string;
  period: string;
  location: string;
  logo: LogoId;
  href?: string;
};

export const education: Education[] = [
  {
    level: 'BSc',
    school: 'Islamic University of Technology',
    degree: 'Bachelor of Science in Computer Science and Engineering',
    result: 'CGPA 3.88 / 4.00, ranked 9th in the class',
    period: 'Jan 2020 - Jun 2024',
    location: 'Gazipur, Bangladesh',
    logo: 'iut',
    href: 'https://www.iutoic-dhaka.edu/',
  },
  {
    level: 'HSC',
    school: 'Rajuk Uttara Model College',
    degree: 'Higher Secondary Certificate, Dhaka Board',
    result: 'GPA 5.00 / 5.00',
    period: '2019',
    location: 'Dhaka, Bangladesh',
    logo: 'rumc',
  },
  {
    level: 'SSC',
    school: 'Shahajuddin Sarker Model School and College',
    degree: 'Secondary School Certificate, Dhaka Board',
    result: 'GPA 5.00 / 5.00',
    period: '2017',
    location: 'Tongi, Gazipur, Bangladesh',
    logo: 'ssmsc',
  },
];
