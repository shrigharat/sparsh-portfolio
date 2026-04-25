export type Achievement = {
  image: string;
  imageMobile?: string;
  alt: string;
  results: string[];
  date: string;
  description: string;
  isLarge?: boolean;
};

export const data: Achievement[] = [
  {
    image: '/assets/achievements/asian-gurgaon-april-2026.jpeg',
    alt: 'Sparsh receiving trophy for winning the Asian Gurgaon U-14 Tennis Tournament',
    results: ['Doubles, Winner 🥇', 'Singles, 2nd Place 🥈'],
    date: '13-18th April, 2026',
    description: 'Under 14\nAsian Gurgaon U-14 Tennis Tournament',
    isLarge: true,
  },
  {
    image: '/assets/achievements/asian-under-14-March-2026.webp',
    alt: 'Sparsh receiving certificate for 3rd place in the Bal Bhavan Asian U-14 Tennis Tournament',
    results: ['Singles, 3rd Place 🥉'],
    date: '21-27th March, 2026',
    description: 'Under 14\nBal Bhavan Asian U-14 Tennis Tournament',
    isLarge: false,
  },
  {
    image: '/assets/achievements/asian-jaipur-3rd-place-april-2026.webp',
    alt: 'Sparsh receiving certificate for 3rd place in the Asian Jaipur U-14 Tennis Tournament',
    results: ['Singles, 3rd Place 🥉'],
    date: '5th-9th April, 2026',
    description: 'Under 14\nAsian Jaipur U-14 Tennis Tournament',
    isLarge: false,
  },
  {
    image: '/assets/achievements/chatrapati-sambhaji-nagar-mslta-dec-25.webp',
    alt: 'Sparsh receiving trophy for winning the MSLTA Masters held in Chatrapati Sambhaji Nagar',
    results: ['Singles, Winner 🥇'],
    date: '26-28th December, 2025',
    description: 'Under 14\nMSLTA Masters (Chatrapati Sambhaji Nagar)',
  },
  {
    image:
      '/assets/achievements/woodridge_highschool_all_india_championship_series_under_16_doubles_winner.webp',
    alt: 'Sparsh receiving trophy for winning doubles and runner up in singles at the MSLTA Woodridge High School All India Championship Series Under 16',
    results: ['Doubles, Winner 🥇', 'Singles, Runner up 🥈'],
    date: '19th Feb, 2026',
    description: 'Under 16\nMSLTA Woodridge High School All India Championship Series',
  },
  {
    image: '/assets/achievements/nagpur-ns-december-26.webp',
    alt: 'Sparsh receiving trophy at NS Nagpur 2025',
    results: ['Doubles, Runner-up 🥈'],
    date: '1-6th Dec, 2024',
    description: 'Under 14\nNS, Nagpur 2025',
  },
  {
    image: '/assets/achievements/under-14-aita-cs7-winner.webp',
    alt: 'Sparsh receiving trophy for winning the Under 14 AITA National Championship CS7',
    results: ['Singles, Winner 🥇'],
    date: '4th April, 2025',
    description: 'Under 14\nAITA National Championship CS7',
  },
  {
    image: '/assets/achievements/national-school-games-mp-winner.jpeg',
    alt: 'Sparsh receiving trophy for winning the National School Games held in Madhya Pradesh',
    results: ['Singles, Winner 🥇', 'Team Event, Winner 🥇'],
    date: '20-24th Dec, 2024',
    description: 'National school games, Madhya Pradesh 2024',
  },
  {
    image: '/assets/achievements/bombay_gymkhana_winner.jpg',
    alt: 'Sparsh receiving trophy for winning the singles and doubles at the Under 12 Championship Series (CS7) 2024 - Bombay Gymkhana',
    results: ['Singles, Winner 🥇', 'Doubles, Winner 🥇'],
    date: '10th May, 2024',
    description: 'Under 12 Championship Series (CS7) 2024 - Bombay Gymkhana',
  },
  {
    image: '/assets/achievements/khar_gymkhana_doubles_runnerup.webp',
    alt: 'Sparsh collecting trophy for runner up in doubles category at the Under 14 Championship Series (CS7) 2024 - Khar Gymkhana',
    results: ['Doubles, Runner up 🥈'],
    date: '3rd May, 2024',
    description: 'Under 14 Championship Series (CS7) 2024 - Khar Gymkhana',
  },
  {
    image: '/assets/achievements/ncdlta_under_12_doubles_winner.jpeg',
    imageMobile: '/assets/achievements/ncdlta_under_12_doubles_winner_mobile.jpeg',
    alt: 'Sparsh collecting trophy for winning in the doubles category at the Under 12 MSLTA NCDLTA (CS7) - Nanded',
    results: ['Doubles, Winner 🥇'],
    date: '19th May, 2023',
    description: 'Under 12 MSLTA NCDLTA (CS7) - Nanded',
  },
  {
    image: '/assets/achievements/kalina_doubles_winner.jpeg',
    alt: 'Sparsh showing his trophy for 1st place in the doubles category and 2nd place in singles in the under 12 group at the Mumbai University Championship Series (CS7) - Kalina',
    results: ['Doubles, Winner 🥇', 'Singles, Runner up 🥈'],
    date: '12th Apr, 2024',
    description: 'Under 12 Mumbai University Championship Series (CS7) - Kalina',
  },
  {
    image: '/assets/achievements/mumbai_soft_tennis_national_selections.jpg',
    imageMobile: '/assets/achievements/mumbai_soft_tennis_national_selections_mobile.jpeg',
    alt: 'Sparsh receiving the trophy for winner in the doubles category, runner up in the singles and runner up in the team events category at the Under 15 Mumbai Soft Tennis National Selection - Satara',
    results: ['Doubles, Winner 🥇', 'Singles, Runner up 🥉', 'Team Events, Runner up 🥈'],
    date: '18th Dec, 2023',
    description: 'Under 15 Mumbai Soft Tennis National Selection - Satara',
  },
];
