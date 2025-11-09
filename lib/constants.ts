export interface EventItem {
  title: string;
  slug: string;
  image: string; // path under /images
  location: string;
  date: string; // ISO or human-friendly date
  time: string; // human-friendly time
}

export const events: EventItem[] = [
  {
    title: 'Next.js Conf 2026',
    slug: 'nextjs-conf-2026',
    image: '/images/event1.png',
    location: 'San Francisco, CA, USA',
    date: '2026-03-10',
    time: '10:00 AM PST',
  },
  {
    title: 'React Summit 2026',
    slug: 'react-summit-amsterdam-2026',
    image: '/images/event2.png',
    location: 'Amsterdam, Netherlands',
    date: '2026-04-22',
    time: '09:00 AM CEST',
  },
  {
    title: 'JSConf EU 2026',
    slug: 'jsconf-eu-2026',
    image: '/images/event3.png',
    location: 'Lisbon, Portugal',
    date: '2026-06-09',
    time: '09:30 AM WEST',
  },
  {
    title: 'KubeCon + CloudNativeCon 2026',
    slug: 'kubecon-2026',
    image: '/images/event4.png',
    location: 'Barcelona, Spain',
    date: '2026-05-12',
    time: '08:30 AM CEST',
  },
  {
    title: 'HackZurich 2026',
    slug: 'hackzurich-2026',
    image: '/images/event5.png',
    location: 'Zurich, Switzerland',
    date: '2026-09-18',
    time: '12:00 PM CEST',
  },
  {
    title: 'PyCon US 2026',
    slug: 'pycon-us-2026',
    image: '/images/event6.png',
    location: 'Pittsburgh, PA, USA',
    date: '2026-04-03',
    time: '09:00 AM EDT',
  },
  {
    title: 'HackMIT 2026',
    slug: 'hackmit-2026',
    image: '/images/event-full.png',
    location: 'Cambridge, MA, USA',
    date: '2026-02-14',
    time: '06:00 PM EST',
    },
  {
    title: 'AWS re:Invent 2026',
    slug: 'aws-reinvent-2026',
    image: '/images/event1.png',
    location: 'Las Vegas, NV, USA',
    date: '2026-11-30',
    time: '09:00 AM PST',
  }
];

export default events;