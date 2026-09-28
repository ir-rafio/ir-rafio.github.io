export type ResearchProject = {
  title: string;
  /** In paper order. Wrap my own name in ** ** to make it bold. */
  authors: string[];
  status: string;
  period: string;
  /** Shown like blog tags. */
  areas: string[];
  /** One or two sentences for the home page card. */
  summary: string;
  /** Longer description for the research page, one string per paragraph. */
  details: string[];
  findings: string[];
  /** Fill this in once the paper is published. It adds a timeline entry. */
  published?: { venue: string; date: string; href?: string };
  /** Only add links that work. */
  links: { label: string; href: string; icon: string }[];
};

export const researchInterests = [
  'Computer Vision',
  'Adversarial Attacks',
  'Continual Learning',
  'Natural Language Processing',
  'Model Steering',
  'Deep Learning',
  'Complexity Theory',
];

export const research: ResearchProject[] = [
  {
    title:
      'A Handful of Patches: The Low-Rank, Decoupled Vulnerability of NR-IQA',
    authors: [
      'Reaz Hassan Joarder',
      'Al-Mubin Khan Nabil',
      'Irfan Nafiz Shahan',
      '**Md. Irfanur Rahman Rafio**',
      'Md Hasanul Kabir (supervisor)',
    ],
    status: 'Work In Progress',
    period: 'Jul 2025 - Present',
    areas: [
      'Adversarial Attacks',
      'Computer Vision',
      'Image Quality Assessment',
    ],
    summary:
      'Small perturbations can fool no-reference image quality models. We show that four learned 16 × 16 patch atoms, shared across images and models, recover 63% to 98% of what a full PGD attack achieves, so most of the weakness sits in a small shared subspace.',
    details: [
      'No-reference image quality assessment (NR-IQA) models predict how good an image looks without a reference image. Because they are differentiable, they are now used as losses in compression, as targets for restoration and as quality filters in generative pipelines. So their weaknesses also affect the systems trained against them.',
      'Existing white-box attacks show that small, image-specific perturbations can move NR-IQA scores a lot. They do not show whether the vulnerability is shared across images, low-dimensional, or related across models. We study this with a constrained, shared-basis attack. Instead of optimizing a full perturbation for every image, the attack may only choose per-image coefficients over a small global dictionary of learned 16 × 16 patch atoms. The same atoms are shared across all images and all models, and the perturbation stays within an L∞ budget of 8/255.',
      "We then measure how much of each model's PGD-achievable score change this restricted dictionary recovers. We test HyperIQA (a hypernetwork CNN), MUSIQ (a multi-scale transformer) and CLIP-IQA+ (a vision-language model).",
    ],
    findings: [
      '**Four learned atoms** recover **63% to 98%** of the PGD-achievable score change, both when the attack raises scores and when it lowers them. A random dictionary of the same size and budget does much worse.',
      'Within the same basis, the models can be steered independently. One perturbation realized **all 27** raise, lower and hold combinations across the three models, while the held models drifted by less than 0.01 score units.',
      'The vulnerability is concentrated in a small shared subspace, while each model responds to its own directions inside it. The shared-basis attack works as a compact check for NR-IQA models before they are used as optimization objectives.',
    ],
    links: [
      {
        label: 'OpenReview',
        href: 'https://openreview.net/forum?id=t1r38gU9PJ',
        icon: 'lucide:file-text',
      },
    ],
  },
];
