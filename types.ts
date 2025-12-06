export enum UserPersona {
  STUDENT_INTL = 'International Student',
  STUDENT_SWE = 'Swedish Student',
  YOUNG_PRO = 'Young Professional',
}

export enum Tab {
  DISCOVER = 'discover',
  CONNECT = 'connect',
  GROW = 'grow',
  STAY = 'stay',
  PROFILE = 'profile',
}

export interface EventItem {
  id: string;
  title: string;
  type: 'party' | 'culture' | 'tech' | 'nature' | 'food';
  location: string;
  date: string;
  attendees: number;
  imageUrl: string;
  isTrending?: boolean;
}

export interface JobItem {
  id: string;
  role: string;
  company: string;
  type: 'internship' | 'thesis' | 'full-time' | 'part-time';
  matchScore: number; // 0-100
  tags: string[];
}

export interface Neighborhood {
  id: string;
  name: string;
  vibe: string;
  commuteTime: number; // minutes to city center
  tags: string[];
  imageUrl: string;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  unlocked: boolean;
}
