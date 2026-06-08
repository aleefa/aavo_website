import type {
  ComparisonItem,
  NavItem,
  ServiceCardItem,
  StatItem,
  VehicleItem,
} from "./landing-types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About Us", href: "/about" },
];

export const heroHighlights = [
  "Lowest Price",
  "Free Cancellation",
  "Zero Commission",
  "Verified Drivers",
];

export const heroStats: StatItem[] = [
  { value: "1k+", label: "Active Travelers" },
  { value: "500+", label: "Verified Drivers" },
  { value: "5+", label: "Cities Covered" },
  { value: "4.9", label: "User Rating" },
];

export const traditionalCabItems: ComparisonItem[] = [
  {
    title: "Call multiple drivers",
    description: "Calling Drivers Takes Time And Effort Every Time.",
    icon: "shield",
  },
  {
    title: "Visit multiple agencies",
    description: "Need To Contact Multiple Agencies For Better Options.",
    icon: "rupee",
  },
  {
    title: "Compare prices manually",
    description: "Comparing Prices Manually Creates Unnecessary Hassle.",
    icon: "headset",
  },
  {
    title: "Time consuming process",
    description: "Booking Process Is Slow And Often Frustrating.",
    icon: "sparkle",
  },
  {
    title: "No easy quote comparison",
    description:
      "No Simple Way To Compare Quotes Instantly.",
    icon: "link",
  },
  {
    title: " Limited choices",
    description: "Limited Vehicle Choices Reduce Booking Flexibility.",
    icon: "calendar",
  },
  {
    title: "Traditional Booking Hassles",
    description:
      "Long wait times and booking processes frustrate customers.",
    icon: "car",
  },
];

export const aavoRideItems: ComparisonItem[] = [
  {
    title: "One Request, Multiple Quotes",
    description: "Submit One Request And Receive Multiple Competitive Quotes.",
    icon: "shield",
  },
  {
    title: "Compare Driver & Agency Prices",
    description: "Easily Compare Driver And Agency Prices In One Place.",
    icon: "rupee",
  },
  {
    title: "Choose the Best Offer",
    description: "Select The Most Suitable Offer For Your Needs..",
    icon: "headset",
  },
  {
    title: "Direct Communication",
    description: "Connect Directly With Drivers And Agencies Instantly.",
    icon: "sparkle",
  },
  {
    title: "Free Cancellation",
    description: "Enjoy Flexible Bookings With Free Cancellation Options.",
    icon: "link",
  },
  {
    title: "Book in Minutes",
    description: "Complete Your Booking Quickly In Just A Few Minutes.",
    icon: "calendar",
  },
  {
    title: "Pre-Book with AAVORide",
    description:
      "Reserve your ride in advance for a seamless travel experience.",
    icon: "car",
  },
];

/** Small travel-solution cards — compact landscape tile on mobile */
const SMALL_SERVICE_CARD_CLASS =
  "h-[225px] min-h-[225px] sm:h-auto sm:min-h-[226px] lg:min-h-0";

export const serviceCards: ServiceCardItem[] = [
  {
    title: "Outstation Trips",
    description:
      "Enjoy smooth outstation rides with verified drivers and transparent pricing.",
    imageSrc: "/images/Travel%20Solution/607616fbcac978653b0f75dc5c52ea15b209dc7a.png",
    imageAlt: "Outstation trip taxi near hillside temple road",
    imagePosition: "center center",
    badge: "Most Popular",
    cta: "Book via App",
    overlayVariant: "large",
    theme: "outstation",
    className: "min-h-[470px] lg:col-span-2 lg:row-span-2 lg:min-h-0",
    contentClassName:
      "right-4 bottom-4 h-[200px] w-[229px] px-4 py-3.5 sm:bottom-[14px] sm:right-[18px] sm:h-auto sm:w-[400px] sm:px-7 sm:py-7",
  },
  {
    title: "Airport Transfers",
    description: "Punctual pickups & drops with real-time flight tracking.",
    imageSrc: "/images/Travel%20Solution/801ac6421fdc196d13e0f3dbc807ce9680e062ef.png",
    imageAlt: "Airport transfer corridor with cab pickup outside",
    imagePosition: "center center",
    overlayVariant: "small",
    theme: "airport",
    className: SMALL_SERVICE_CARD_CLASS,
  },
  {
    title: "Wedding Cars",
    description: "Make your special day grand with our luxury fleet.",
    imageSrc: "/images/Travel%20Solution/26e3ed62288ed25e4eb5df8e5cdbf9a580c7516f.png",
    imageAlt: "Wedding car decorated with flowers outside venue",
    imagePosition: "center center",
    overlayVariant: "small",
    theme: "wedding",
    className: SMALL_SERVICE_CARD_CLASS,
  },
  {
    title: "Local Rentals",
    description: "Hourly packages for all your city exploration needs.",
    imageSrc: "/images/Travel%20Solution/f6f5d8b1e06f86fd02dcfe1fae1c941460a012af.jpg",
    imageAlt: "Local city rental ride with map navigation on mobile phone",
    imagePosition: "center center",
    overlayVariant: "small",
    theme: "local",
    className: SMALL_SERVICE_CARD_CLASS,
  },
  {
    title: "Round Trips",
    description: "Seamless same-day travel with zero hidden costs.",
    imageSrc: "/images/Travel%20Solution/d1139a83805d5a47124d82211d382fce06496ab1.png",
    imageAlt: "Round trip car route near heritage palace landmarks",
    imagePosition: "center center",
    overlayVariant: "small",
    theme: "roundtrip",
    className: SMALL_SERVICE_CARD_CLASS,
  },
  {
    title: "Tempo Travellers",
    description: "Premium group travel with spacious, modern vans.",
    imageSrc: "/images/Travel%20Solution/e40aad678422e4d91aaeab08d53e63ffd038688d.png",
    imageAlt: "Tempo traveller van on a city street at night",
    imagePosition: "center center",
    overlayVariant: "small",
    theme: "tempo",
    className: SMALL_SERVICE_CARD_CLASS,
  },
];

export const vehicles: VehicleItem[] = [
  {
    kind: "hatchback",
    title: "Hatchback",
    subtitle: "Budget Friendly",
    description: "Best for city rides & quick trips",
    imageSrc: "/images/Find%20Ride/Hatchback.png",
    imageAlt: "White hatchback car",
    features: [
      { label: "4 Seats", icon: "seat" },
      { label: "AC", icon: "snow" },
      { label: "2 Bags", icon: "bag" },
      { label: "Sanitized", icon: "shield" },
    ],
  },
  {
    kind: "sedan",
    title: "Sedan",
    subtitle: "Comfort Ride",
    description: "Best for business trips and long drives",
    imageSrc: "/images/Find%20Ride/Sedan.png",
    imageAlt: "White sedan car",
    features: [
      { label: "4 Seats", icon: "seat" },
      { label: "AC", icon: "snow" },
      { label: "3 Bags", icon: "bag" },
      { label: "Sanitized", icon: "shield" },
    ],
  },
  {
    kind: "suv",
    title: "SUV",
    subtitle: "Family Trips",
    description: "Perfect for family outstation trips.",
    imageSrc: "/images/Find%20Ride/SUV.png",
    imageAlt: "White SUV car",
    features: [
      { label: "6 Seats", icon: "seat" },
      { label: "AC", icon: "snow" },
      { label: "5-6 Bags", icon: "bag" },
      { label: "Sanitized", icon: "shield" },
    ],
  },
  {
    kind: "van",
    title: "Comfort Van",
    subtitle: "Group Trips",
    description: "Best for group transfers and comfortable long routes.",
    imageSrc: "/images/Find%20Ride/Comfort%20Van.png",
    imageAlt: "White comfort van",
    features: [
      { label: "6-10 Seats", icon: "seat" },
      { label: "AC", icon: "snow" },
      { label: "8 Bags", icon: "bag" },
      { label: "Sanitized", icon: "shield" },
    ],
  },
  {
    kind: "van",
    title: "Innova",
    subtitle: "Premium MUV",
    description: "Comfortable city and outstation rides for small groups.",
    imageSrc: "/images/Find%20Ride/Innova.png",
    imageAlt: "White Innova car",
    features: [
      { label: "6 Seats", icon: "seat" },
      { label: "AC", icon: "snow" },
      { label: "4 Bags", icon: "bag" },
      { label: "Sanitized", icon: "shield" },
    ],
  },
  {
    kind: "van",
    title: "Innova Crysta",
    subtitle: "Executive Ride",
    description: "Ideal for premium family and corporate travel.",
    imageSrc: "/images/Find%20Ride/Innova%20Crysta.png",
    imageAlt: "White Innova Crysta car",
    features: [
      { label: "6 Seats", icon: "seat" },
      { label: "AC", icon: "snow" },
      { label: "5 Bags", icon: "bag" },
      { label: "Sanitized", icon: "shield" },
    ],
  },
];

export const supportedLanguages = [
  "English",
  "Hindi",
  "Punjabi",
  "Marathi",
  "Gujarati",
  "Tamil",
  "Bengali",
  "Kannada",
];
