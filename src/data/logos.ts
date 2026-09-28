// Organization logos, keyed by a short id used across the data files.
import type { ImageMetadata } from 'astro';
import baps from '@/assets/logos/baps.png';
import bcs from '@/assets/logos/bcs.png';
import bindulogic from '@/assets/logos/bindulogic.png';
import codeforces from '@/assets/logos/codeforces.png';
import icpc from '@/assets/logos/icpc.png';
import iut from '@/assets/logos/iut.png';
import iutcs from '@/assets/logos/iutcs.jpg';
import oic from '@/assets/logos/oic.png';
import rayan from '@/assets/logos/rayan.png';
import rumc from '@/assets/logos/rumc.png';
import ssmsc from '@/assets/logos/ssmsc.png';
import therap from '@/assets/logos/therap.png';
import uiu from '@/assets/logos/uiu.png';
import iutpc from '@/assets/logos/iutpc.png';
import beyblade from '@/assets/logos/beyblade.png';
import icpcDhaka2025 from '@/assets/logos/icpc-dhaka-2025.png';
import bitfest2025 from '@/assets/logos/kuet-iupc-2025-bitfest.png';
import uiuCseFest2025 from '@/assets/logos/uiu-cse-fest-2025.png';
import cuet from '@/assets/logos/cuet-crest.png';
import duet from '@/assets/logos/duet-crest.png';
import sust from '@/assets/logos/sust-crest.png';
import nsu from '@/assets/logos/nsu-crest.png';

export const logos = {
  baps,
  bcs,
  bindulogic,
  codeforces,
  icpc,
  iut,
  iutcs,
  oic,
  rayan,
  rumc,
  ssmsc,
  therap,
  uiu,
  iutpc,
  beyblade,
  icpcDhaka2025,
  bitfest2025,
  uiuCseFest2025,
  cuet,
  duet,
  sust,
  nsu,
} satisfies Record<
  string,
  ImageMetadata
>;

export type LogoId = keyof typeof logos;
