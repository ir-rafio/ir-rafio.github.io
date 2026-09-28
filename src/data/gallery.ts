import cuet24 from '@/assets/gallery/cuet24.jpg';
import cuet25 from '@/assets/gallery/cuet25.jpg';
import duet25Judgeroom from '@/assets/gallery/duet25-judgeroom.jpg';
import duet25Yeamin from '@/assets/gallery/duet25-yeamin.jpg';
import duet25 from '@/assets/gallery/duet25.jpg';
import icpc22 from '@/assets/gallery/icpc22.jpg';
import icpc23 from '@/assets/gallery/icpc23.jpg';
import icpc24 from '@/assets/gallery/icpc24.jpg';
import icpc24Prize from '@/assets/gallery/icpc25-prize.jpg';
import icpc25 from '@/assets/gallery/icpc25.jpg';
import iut26 from '@/assets/gallery/iut26.jpg';
import ncpc24Iut from '@/assets/gallery/ncpc24-iut.jpg';
import ncpc24 from '@/assets/gallery/ncpc24.jpg';
import sust24 from '@/assets/gallery/sust24.jpg';
import sust26 from '@/assets/gallery/sust26.jpg';
import type { ImageMetadata } from 'astro';

export type GalleryItem =
  | { type: 'image'; src: ImageMetadata; caption: string }
  | { type: 'video'; src: string; poster: string; caption: string };

// Newest first.
export const gallery: GalleryItem[] = [
  {
    type: 'image',
    src: iut26,
    caption: 'IUT 12th ICT Fest IUPC 2026 judge panel',
  },
  { type: 'image', src: sust26, caption: 'SUST IUPC 2026 judge panel' },
  {
    type: 'video',
    src: '/media/icpc25.mp4',
    poster: '/media/icpc25-poster.jpg',
    caption:
      'ICPC Asia Dhaka Regional 2025 problemset analysis by Raihat Zaman Neloy',
  },
  {
    type: 'image',
    src: icpc25,
    caption: 'My ICPC id cards, from contestant to judge',
  },
  { type: 'image', src: cuet25, caption: 'CUET IUPC 2025 judge panel ' },
  { type: 'image', src: duet25, caption: 'Prize giving at DUET IUPC 2025' },
  {
    type: 'image',
    src: duet25Judgeroom,
    caption: 'DUET IUPC 2025 judge panel',
  },
  {
    type: 'image',
    src: duet25Yeamin,
    caption:
      'Me having fun with Yeamin Kaiser at the judge room of DUET IUPC 2025',
  },
  {
    type: 'image',
    src: icpc24Prize,
    caption: '5th place prize at the ICPC Asia Dhaka Regional 2024',
  },
  {
    type: 'image',
    src: icpc24,
    caption: 'IUT teams at ICPC Asia Dhaka Regional 2024',
  },
  {
    type: 'image',
    src: ncpc24,
    caption: 'Roommates at NCPC 2023',
  },
  { type: 'image', src: ncpc24Iut, caption: 'IUT teams at NCPC 2023' },
  {
    type: 'image',
    src: sust24,
    caption: 'IUT teams at SUST CSE Carnival 2024',
  },
  {
    type: 'image',
    src: cuet24,
    caption: 'IUT teams at CUET IUPC CodeStorm 1.0',
  },
  {
    type: 'image',
    src: icpc23,
    caption: 'My team at ICPC Asia Dhaka Regional 2023 at BUBT',
  },
  {
    type: 'image',
    src: icpc22,
    caption: 'IUT teams at ICPC Asia Dhaka Regional 2022 at Green University',
  },
];
