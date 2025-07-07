// Data types for church homepage

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image_url: string;
  category: string;
}

export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  duration: string;
  description: string;
  video_url: string;
  audio_url: string;
  thumbnail_url: string;
  series: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: number;
  active: boolean;
  created_at: string;
  expires_at?: string;
}

export interface ChurchInfo {
  id: string;
  service_times: {
    sunday: string[];
    wednesday: string[];
    friday?: string[];
  };
  welcome_message: string;
  hero_image_url: string;
  updated_at: string;
}

export interface HomepageData {
  events: Event[];
  latestSermon: Sermon;
  announcements: Announcement[];
  churchInfo: ChurchInfo;
}
