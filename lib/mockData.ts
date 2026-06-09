export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  tag: string;
  readTime: string;
  publishDate: string;
  featured?: boolean;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  sections: Array<{
    type: 'paragraph' | 'heading' | 'quote' | 'image';
    content?: string;
    imageUrl?: string;
    caption?: string;
  }>;
  mustVisitSpots?: Array<{
    name: string;
    description: string;
  }>;
}

export interface Destination {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const CATEGORIES = [
  'All Stories',
  'Spiritual',
  'Pilgrimage',
  'Luxury',
  'Adventure',
  'Culture',
  'Road Trips',
];

export const MOCK_DESTINATIONS: Destination[] = [
  {
    id: '1',
    title: 'Varanasi',
    category: 'Spiritual',
    image: '/images/varanasi.jpg',
  },
  {
    id: '2',
    title: 'Rishikesh',
    category: 'Adventure',
    image: '/images/rishikesh.jpg',
  },
  {
    id: '3',
    title: 'Jaipur',
    category: 'Culture',
    image: '/images/jaipur.jpg',
  },
  {
    id: '4',
    title: 'Goa',
    category: 'Luxury',
    image: '/images/goa.jpg',
  },
];

export const MOCK_BLOGS: Blog[] = [
  {
    id: '1',
    slug: 'spiritual-journey-varanasi',
    title: 'A Spiritual Journey Through Varanasi: The City of Lights',
    excerpt: 'Discover the ancient ghats, spiritual ceremonies, and timeless traditions that make Varanasi one of the most sacred cities in India.',
    coverImage: '/images/varanasi-blog.jpg',
    tag: 'Spiritual',
    readTime: '8 min read',
    publishDate: 'Jan 15, 2026',
    featured: true,
    author: {
      name: 'Priya Sharma',
      role: 'Travel Writer',
      avatar: '/images/author-priya.jpg',
    },
    sections: [
      {
        type: 'paragraph',
        content: 'Varanasi, also known as Kashi or Benaras, is one of the oldest continuously inhabited cities in the world. Situated on the banks of the sacred Ganges River, this city has been a center of spirituality, learning, and culture for thousands of years.',
      },
      {
        type: 'heading',
        content: 'The Sacred Ghats',
      },
      {
        type: 'paragraph',
        content: 'The ghats of Varanasi are the heart of the city. With over 80 ghats stretching along the riverbank, each has its own unique story and significance. The Dashashwamedh Ghat is the most famous, known for its grand evening Ganga Aarti ceremony that attracts thousands of devotees and tourists daily.',
      },
      {
        type: 'quote',
        content: 'Varanasi is older than history, older than tradition, older even than legend and looks twice as old as all of them put together.',
      },
      {
        type: 'image',
        content: '',
        imageUrl: '/images/varanasi-ghat.jpg',
        caption: 'Evening Ganga Aarti at Dashashwamedh Ghat',
      },
    ],
    mustVisitSpots: [
      {
        name: 'Kashi Vishwanath Temple',
        description: 'One of the twelve Jyotirlingas, dedicated to Lord Shiva.',
      },
      {
        name: 'Sarnath',
        description: 'Where Buddha gave his first sermon after enlightenment.',
      },
      {
        name: 'Assi Ghat',
        description: 'A peaceful ghat perfect for meditation and sunrise views.',
      },
    ],
  },
  {
    id: '2',
    slug: 'luxury-road-trip-rajasthan',
    title: 'Luxury Road Trip Through Rajasthan: Palaces and Forts',
    excerpt: 'Experience the royal heritage of Rajasthan on a luxurious road trip through its magnificent palaces, forts, and colorful cities.',
    coverImage: '/images/rajasthan-blog.jpg',
    tag: 'Luxury',
    readTime: '10 min read',
    publishDate: 'Jan 10, 2026',
    featured: true,
    author: {
      name: 'Rahul Mehta',
      role: 'Travel Expert',
      avatar: '/images/author-rahul.jpg',
    },
    sections: [
      {
        type: 'paragraph',
        content: 'Rajasthan, the land of kings, offers a perfect blend of history, culture, and luxury. From the pink city of Jaipur to the blue city of Jodhpur, every destination tells a story of royal grandeur.',
      },
      {
        type: 'heading',
        content: 'The Golden Triangle',
      },
      {
        type: 'paragraph',
        content: 'Start your journey in Delhi, then travel to Agra to witness the Taj Mahal, and finally arrive in Jaipur. This classic route offers the best introduction to Rajasthan\'s rich heritage.',
      },
    ],
    mustVisitSpots: [
      {
        name: 'City Palace, Jaipur',
        description: 'A stunning blend of Rajasthani and Mughal architecture.',
      },
      {
        name: 'Mehrangarh Fort, Jodhpur',
        description: 'One of the largest forts in India with breathtaking views.',
      },
    ],
  },
  {
    id: '3',
    slug: 'adventure-rishikesh',
    title: 'Adventure Awaits: Rishikesh - The Yoga Capital of the World',
    excerpt: 'From white water rafting to meditation retreats, discover why Rishikesh is the perfect destination for adventure seekers and spiritual seekers alike.',
    coverImage: '/images/rishikesh-blog.jpg',
    tag: 'Adventure',
    readTime: '7 min read',
    publishDate: 'Jan 5, 2026',
    featured: true,
    author: {
      name: 'Ankit Patel',
      role: 'Adventure Guide',
      avatar: '/images/author-ankit.jpg',
    },
    sections: [
      {
        type: 'paragraph',
        content: 'Nestled in the foothills of the Himalayas along the sacred Ganges River, Rishikesh is a unique destination that combines adventure sports with spiritual practices.',
      },
      {
        type: 'heading',
        content: 'White Water Rafting',
      },
      {
        type: 'paragraph',
        content: 'The Ganges offers some of the best white water rafting experiences in India. From gentle stretches for beginners to challenging rapids for experts, there\'s something for everyone.',
      },
    ],
  },
  {
    id: '4',
    slug: 'cultural-kerala',
    title: 'God\'s Own Country: A Cultural Journey Through Kerala',
    excerpt: 'Explore the backwaters, tea plantations, and rich cultural heritage of Kerala on this unforgettable journey through South India.',
    coverImage: '/images/kerala-blog.jpg',
    tag: 'Culture',
    readTime: '9 min read',
    publishDate: 'Dec 28, 2025',
    author: {
      name: 'Sneha Nair',
      role: 'Cultural Historian',
      avatar: '/images/author-sneha.jpg',
    },
    sections: [
      {
        type: 'paragraph',
        content: 'Kerala, known as God\'s Own Country, is a tropical paradise with a rich cultural heritage. From the serene backwaters of Alleppey to the tea plantations of Munnar, every corner of Kerala offers a unique experience.',
      },
      {
        type: 'heading',
        content: 'The Backwaters',
      },
      {
        type: 'paragraph',
        content: 'A houseboat cruise through the backwaters of Kerala is a must-do experience. Gliding through the tranquil waters surrounded by coconut palms and paddy fields is the perfect way to unwind.',
      },
    ],
  },
  {
    id: '5',
    slug: 'road-trip-leh-ladakh',
    title: 'Epic Road Trip: Leh Ladakh - The Land of High Passes',
    excerpt: 'Embark on an unforgettable road trip through the breathtaking landscapes of Ladakh, crossing high mountain passes and visiting ancient monasteries.',
    coverImage: '/images/ladakh-blog.jpg',
    tag: 'Road Trips',
    readTime: '12 min read',
    publishDate: 'Dec 20, 2025',
    author: {
      name: 'Vikram Singh',
      role: 'Adventure Photographer',
      avatar: '/images/author-vikram.jpg',
    },
    sections: [
      {
        type: 'paragraph',
        content: 'Ladakh, often called the Land of High Passes, is a dream destination for road trip enthusiasts. With its stunning landscapes, ancient monasteries, and unique culture, it offers an experience like no other.',
      },
      {
        type: 'heading',
        content: 'Khardung La Pass',
      },
      {
        type: 'paragraph',
        content: 'At 5,359 meters, Khardung La is one of the highest motorable passes in the world. The journey to the top offers breathtaking views of the surrounding mountains and valleys.',
      },
    ],
  },
];
