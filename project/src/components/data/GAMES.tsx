import banner from '../../image/icons/signupbanner.png';
import banner2 from '../../image/cover4.png';
import banner3 from '../../image/cover5.png';
import banner4 from '../../image/cover1.png';
import banner5 from '../../image/cover2.png';
import brawllerlogo from '../../image/icons/REBEL-BRAWLERS-LOGO.png'
import speedrunlogo from '../../image/icons/speedrunlogo.svg'

export interface Game {
  title: string;
  image: string;
  logo: string;
  slug?: string;
  showButtons?: boolean;
}

export const GAMES: Game[] = [
  {
    title: 'Referral banner',
    image: banner4,
    logo: speedrunlogo,
    slug: 'referral',
    showButtons: false
  },
  {
    title: 'Special Offer',
    image: banner5,
    logo: speedrunlogo,
    slug: 'special-offer',
    showButtons: false
  },
  {
    title: 'sign up now',
    image: banner,
    logo: brawllerlogo,
    slug: 'sign-up',
    showButtons: false
  },
  {
    title: 'rebel brawlers',
    image: banner2,
    logo: brawllerlogo,
    slug: 'rebel-brawlers',
    showButtons: true
  },
  {
    title: 'Rebel speed runner',
    image: banner3,
    logo: speedrunlogo,
    slug: 'rebel-speed-runner',
    showButtons: true
  }
];