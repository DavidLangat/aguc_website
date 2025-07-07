import { HomepageData } from '@/types/homepage';

// Dummy data for church homepage prototype
export const homepageData: HomepageData = {
  events: [
    {
      id: '1',
      title: 'Sunday Morning Service',
      description: 'Join us for worship, fellowship, and the Word of God',
      date: '2025-07-13',
      time: '10:00 AM',
      location: 'Main Sanctuary',
      image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      category: 'Service'
    },
    {
      id: '2',
      title: 'Youth Bible Study',
      description: 'Interactive Bible study for young adults and teenagers',
      date: '2025-07-15',
      time: '7:00 PM',
      location: 'Youth Center',
      image_url: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
      category: 'Bible Study'
    },
    {
      id: '3',
      title: 'Community Outreach',
      description: 'Serving our local community with love and care',
      date: '2025-07-19',
      time: '9:00 AM',
      location: 'Community Center',
      image_url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
      category: 'Outreach'
    }
  ],
  latestSermon: {
    id: '1',
    title: 'Walking in Faith: Trusting God\'s Plan',
    speaker: 'Pastor Michael Johnson',
    date: '2025-07-06',
    duration: '45 minutes',
    description: 'Discover how to trust in God\'s perfect timing and plan for your life, even when the path seems unclear.',
    video_url: 'https://example.com/video',
    audio_url: 'https://example.com/audio',
    thumbnail_url: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80',
    series: 'Faith in Action'
  },
  announcements: [
    {
      id: '1',
      title: 'Welcome to Our Church Family!',
      content: 'We\'re excited to have you join us for worship. New visitors, please stop by the welcome desk after service.',
      priority: 1,
      active: true,
      created_at: '2025-07-01T00:00:00Z',
      expires_at: '2025-08-01T00:00:00Z'
    }
  ],
  churchInfo: {
    id: '1',
    service_times: {
      sunday: ['8:00 AM', '10:00 AM', '6:00 PM'],
      wednesday: ['7:00 PM'],
      friday: ['7:30 PM']
    },
    welcome_message: 'Welcome to Amazing Grace United Church - where faith meets community and love transforms lives.',
    hero_image_url: 'https://images.unsplash.com/photo-1582721478939-6a2465e6da8c?w=1920&q=80',
    updated_at: '2025-07-01T00:00:00Z'
  }
};

// Function to simulate API call
export async function getHomepageData(): Promise<HomepageData> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return homepageData;
}
