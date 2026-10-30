/**
 * ─────────────────────────────────────────────────────────────
 *  YOUR PROJECTS, each one gets its own case-study page at /work/<slug>.
 *  Screenshots live in public/work/. Add or swap images any time.
 *
 *  FunctionFindr has a full, first-hand write-up. The others describe
 *  what is visible on each live site, TODO: give them the same detail
 *  (responsibilities, tech, outcome) as FunctionFindr when you can.
 * ─────────────────────────────────────────────────────────────
 */

export type Project = {
  slug: string;
  title: string;
  url: string;
  category: "Business" | "E-commerce" | "Platform" | "Personal Brand";
  industry: string;
  location?: string;
  platform?: string;
  role: string;
  tags: string[];
  cover: string;
  gallery: string[];
  summary: string;
  brief: string;
  approach: string;
  highlights: { title: string; text: string }[];
  /** Optional detail for fully documented case studies. */
  projectType?: string;
  specialization?: string[];
  responsibilities?: { title: string; items: string[] }[];
  tech?: string[];
  outcome?: string;
  achievement?: string;
};

const role = "WordPress Development"; // TODO: set per project (e.g. "WooCommerce customisation", "HivePress development")

export const projects: Project[] = [
  {
    slug: "functionfindr",
    title: "FunctionFindr",
    url: "https://functionfindr.com/",
    category: "Platform",
    industry: "Venue Booking Marketplace",
    location: "Melbourne, Australia",
    platform: "WordPress + HivePress",
    role: "Full build & custom development",
    projectType: "Custom WordPress Marketplace & Booking Platform",
    tags: ["HivePress", "Marketplace", "Booking"],
    cover: "/work/functionfindr.jpg",
    gallery: ["/work/functionfindr-2.jpg", "/work/functionfindr-3.jpg"],
    summary:
      "A custom WordPress marketplace and booking platform for function rooms and event venues, built from scratch on HivePress with a custom booking flow, add-ons and vendor dashboard.",
    brief:
      "FunctionFindr is an online marketplace that helps people discover and book function rooms and event venues for celebrations, private parties, corporate gatherings and other special occasions. The goal was a user-friendly booking platform that simplifies venue discovery and gives vendors convenient tools to manage their listings and bookings.",
    approach:
      "I developed the website from scratch using WordPress and the HivePress theme, then customised the platform extensively around the business requirements, building custom pages, extending HivePress functionality, creating custom add-ons, modifying the booking workflow, and redesigning the vendor dashboard and My Account sections.",
    specialization: ["Custom plugin development", "Marketplace customisation", "Booking system development", "Vendor dashboard customisation"],
    responsibilities: [
      {
        title: "Complete WordPress website development",
        items: [
          "Developed the website from scratch using WordPress",
          "Configured and customised the HivePress theme to match the requirements",
          "Created multiple custom pages and tailored layouts and components",
          "Kept a consistent experience across the main site and dashboard interfaces",
        ],
      },
      {
        title: "HivePress theme & plugin customisation",
        items: [
          "Extended core HivePress functionality for project-specific requirements",
          "Customised existing features, templates and page structures",
          "Adapted the marketplace structure for specialised venue listings and bookings",
        ],
      },
      {
        title: "Custom booking flow",
        items: [
          "Customised the default booking workflow to match the platform's business logic",
          "Improved the flow from browsing listings to venue details, availability and booking",
          "Integrated booking with the listing and account management features",
        ],
      },
      {
        title: "Vendor dashboard customisation",
        items: [
          "Customised the vendor-side interface for venue management",
          "Modified dashboard layouts and vendor-facing functionality",
          "Improved how vendors manage their listings and booking information",
        ],
      },
      {
        title: "My Account section",
        items: [
          "Customised the My Account area and its individual tabs",
          "Improved navigation and organisation across account sections",
          "Adjusted account features to work with the custom marketplace and booking workflows",
        ],
      },
      {
        title: "Custom add-on development",
        items: [
          "Created custom add-ons beyond the standard HivePress feature set",
          "Customised how marketplace features, accounts, vendors and bookings interact",
          "Focused on maintainable customisations that fit the WordPress ecosystem",
        ],
      },
    ],
    tech: [
      "WordPress Development",
      "HivePress Theme Customisation",
      "HivePress Plugin Customisation",
      "Custom Add-on Development",
      "Custom Page Development",
      "Booking Workflow Customisation",
      "Vendor Dashboard Development",
      "My Account & UI Customisation",
      "Marketplace Functionality",
      "Theme & Template Modification",
    ],
    outcome:
      "A customised venue-booking marketplace built around FunctionFindr's specific requirements, bringing venue discovery, booking and vendor management together in one tailored WordPress solution. The work extended the HivePress ecosystem with custom functionality and improved the experience for both customers and venue vendors.",
    achievement:
      "Transformed a standard WordPress and HivePress setup into a tailored marketplace with a customised booking flow, additional functionality, and extensively modified vendor and account interfaces.",
    highlights: [
      { title: "Search-first venue discovery", text: "Event type, number of guests and location are searchable straight from the first screen." },
      { title: "Custom booking workflow", text: "Browse → venue details → availability → booking, reworked around the platform's business logic." },
      { title: "Vendor dashboard", text: "A redesigned vendor area for managing venue listings and booking information." },
      { title: "Custom HivePress add-ons", text: "Functionality beyond the standard HivePress extensions, built to stay maintainable." },
    ],
  },
  {
    slug: "towit",
    title: "Towit",
    url: "https://towit.com/",
    category: "Platform",
    industry: "Trailer Rental Marketplace",
    location: "United States",
    platform: "WordPress + HivePress + custom code",
    role: "WordPress / HivePress Developer",
    projectType: "Peer-to-Peer Trailer Rental Marketplace",
    tags: ["HivePress", "Marketplace", "Custom SMS"],
    cover: "/work/towit.jpg",
    gallery: ["/work/towit-2.jpg", "/work/towit-3.jpg", "/work/towit-4.jpg"],
    summary:
      "A WordPress and HivePress trailer rental marketplace with location-based search, category and price filtering, map browsing, detailed listings and host messaging, plus custom timezone-aware SMS reminders for renters and owners.",
    brief:
      "Towit is a peer-to-peer trailer rental marketplace. The site helps renters find trailers by location and category, book online and message hosts, while giving trailer owners a simple way to join as hosts and list their trailers.",
    approach:
      "I built the Towit website with WordPress and HivePress, creating the marketplace pages and adding custom functionality for booking reminders. The system sends an SMS to both the renter and the trailer owner 15 minutes before each booking, using the booking's own timezone to schedule the reminder correctly.",
    specialization: ["HivePress marketplace", "Custom booking reminders", "Timezone-aware SMS scheduling", "Search, filters & map"],
    responsibilities: [
      {
        title: "WordPress & HivePress marketplace",
        items: [
          "Built the Towit website with WordPress and HivePress",
          "Created the marketplace pages for renters and hosts",
          "Host onboarding inviting owners to join and publish their trailers",
        ],
      },
      {
        title: "Trailer listings",
        items: [
          "Listings show location, daily rate and category",
          "Manufacturer, year, hitch type and hitch class details",
          "Photo galleries and full trailer specifications",
        ],
      },
      {
        title: "Search & discovery",
        items: [
          "Location search with trailer-type keyword search",
          "Category filters, price controls, tags and sorting",
          "Popular-city links for quick searches in selected locations",
        ],
      },
      {
        title: "Map browsing",
        items: [
          "Map view to browse trailer listings geographically",
          "Show / hide map toggle on the listings page",
          "Trailer pins across the US for quick geographic browsing",
        ],
      },
      {
        title: "Booking & host communication",
        items: [
          "Online booking with pickup and return dates and times",
          "Optional extra services on bookings",
          "Host messaging and saved listings",
        ],
      },
      {
        title: "Custom SMS booking reminders",
        items: [
          "SMS sent to both the renter and the trailer owner",
          "Delivered 15 minutes before each booking",
          "Scheduled using the booking's own timezone",
        ],
      },
    ],
    tech: [
      "WordPress Development",
      "HivePress Marketplace",
      "Custom PHP Functionality",
      "SMS Notifications",
      "Timezone-aware Scheduling",
      "Booking Workflow",
      "Location Search & Filters",
      "Map-based Listings",
      "Host Messaging",
      "Responsive Front-End",
    ],
    outcome:
      "A peer-to-peer trailer rental marketplace where renters can find, compare and book trailers by location, category and price, browse listings on a map and message hosts directly. Custom timezone-aware SMS reminders make sure both renter and owner are ready for every pickup, wherever they are.",
    achievement:
      "Built a WordPress and HivePress trailer rental marketplace and added custom, timezone-aware SMS reminders that notify both the renter and the owner 15 minutes before every booking.",
    highlights: [
      { title: "Location-based search", text: "Search by trailer type and location, with popular-city shortcuts." },
      { title: "Filters & map", text: "Category, price, tags and sorting, plus a map view of listings." },
      { title: "Detailed listings", text: "Daily rate, manufacturer, year and hitch details on every trailer." },
      { title: "Timezone-aware SMS reminders", text: "Renter and owner are both notified 15 minutes before pickup." },
    ],
  },
  {
    slug: "photo-trips",
    title: "Photo Trips",
    url: "https://photo-trips.com/",
    category: "Platform",
    industry: "Travel Photography Marketplace",
    location: "Japan · South Korea · Bali",
    platform: "WordPress + HivePress",
    role: "WordPress / HivePress Developer",
    projectType: "Local Photographer Marketplace",
    tags: ["HivePress", "Marketplace", "Travel"],
    cover: "/work/photo-trips.jpg",
    gallery: ["/work/photo-trips-2.jpg", "/work/photo-trips-3.jpg", "/work/photo-trips-4.jpg", "/work/photo-trips-5.jpg"],
    summary:
      "A WordPress and HivePress marketplace connecting travellers with local photographers in Japan, South Korea and Bali, with destination-based discovery, detailed photoshoot listings, membership, booking information, photographer onboarding, reviews and a travel photography blog.",
    brief:
      "Photo Trips helps travellers book private photoshoots with local photographers in destinations including Japan, South Korea and Bali. The platform brings photographer discovery, shoot listings, booking information, reviews and travel guides together in one place.",
    approach:
      "I built Photo Trips with WordPress and HivePress, setting up the marketplace pages, photographer and photoshoot listings, and membership features. I also created the blog and supporting content pages to help travellers discover destinations and plan their photoshoots.",
    specialization: ["HivePress marketplace", "Photoshoot listings", "Membership features", "Blog & content pages"],
    responsibilities: [
      {
        title: "WordPress & HivePress marketplace",
        items: [
          "Built Photo Trips with WordPress and HivePress",
          "Set up the marketplace pages for travellers and photographers",
          "Membership features with traveller accounts",
        ],
      },
      {
        title: "Photographer & photoshoot listings",
        items: [
          "Listings show destination, session length and edited photo count",
          "Price per person, booking count and star reviews on every card",
          "Photographer profile linked from each photoshoot",
        ],
      },
      {
        title: "Destination & style discovery",
        items: [
          "Browse by country and city, Tokyo, Kyoto, Seoul, Mount Fuji and more",
          "Shoot styles such as proposals, kimono and hanbok sessions",
          "Explore page filters by country, city and tags",
        ],
      },
      {
        title: "Booking information",
        items: [
          "Solo, couple and group packages with photo counts and prices",
          "Date selection with availability",
          "Duration, group size, languages and private-session details",
        ],
      },
      {
        title: "Custom requests & onboarding",
        items: [
          "Custom shoot requests for specific locations, styles or plans",
          "Dedicated application path for photographers",
          "Clear calls to action for travellers and photographers",
        ],
      },
      {
        title: "Blog, reviews & FAQs",
        items: [
          "Travel & photo guides blog with category filters and search",
          "Destination content and photography tips",
          "Reviews and FAQs explaining the booking process",
        ],
      },
    ],
    tech: [
      "WordPress Development",
      "HivePress Marketplace",
      "Photoshoot Listings",
      "Photographer Profiles",
      "Membership Features",
      "Destination & Style Taxonomies",
      "Booking Packages & Availability",
      "Custom Request Flow",
      "Blog & Content Pages",
      "Responsive Front-End",
    ],
    outcome:
      "A polished marketplace where travellers can discover local photographers by destination and style, compare photoshoots by length, photos, price and reviews, and plan their shoot with the help of in-depth travel guides, while photographers have a clear path to join the platform.",
    achievement:
      "Built a WordPress and HivePress photographer marketplace that combines destination-based discovery, detailed photoshoot listings, membership, booking information, photographer onboarding, reviews and a travel photography blog.",
    highlights: [
      { title: "Destination discovery", text: "Japan, South Korea and Bali, by city and shoot style." },
      { title: "Detailed photoshoot listings", text: "Length, edited photos, price, bookings and reviews." },
      { title: "Packages & dates", text: "Solo, couple and group packages with date selection." },
      { title: "Travel photography blog", text: "Guides and tips to help travellers plan their shoots." },
    ],
  },
  {
    slug: "gradeschools",
    title: "Gradeschools",
    url: "https://peru-vulture-870890.hostingersite.com/",
    category: "Platform",
    industry: "Education · School Discovery",
    location: "France",
    platform: "WordPress + ACF",
    role: "WordPress Developer",
    projectType: "School Discovery & Comparison Platform",
    tags: ["WordPress", "ACF", "Directory"],
    cover: "/work/gradeschools.jpg",
    gallery: ["/work/gradeschools-2.jpg", "/work/gradeschools-3.jpg", "/work/gradeschools-4.jpg", "/work/gradeschools-5.jpg"],
    summary:
      "A WordPress school discovery platform that helps families find and compare schools in France, with custom map discovery, advanced filters, rankings, reviews, saved lists and comparisons.",
    brief:
      "Gradeschools brings school listings, rankings, reviews and school information together in one place for families comparing schools and colleges in France. Visitors can browse school categories, search for a school or district, compare schools, save schools to a personal list and explore schools on a map.",
    approach:
      "I developed a WordPress-based school discovery platform using Advanced Custom Fields to structure school information and power custom listing layouts. I created a custom post type for school profiles, built map-based discovery, and added advanced filters to help visitors narrow results, with rankings, reviews, saved lists and school comparison workflows connected throughout.",
    specialization: ["Custom post types & ACF", "Map-based discovery", "Advanced search & filtering", "Listing & comparison workflows"],
    responsibilities: [
      {
        title: "Structured school content",
        items: [
          "Set up a custom post type for school profiles",
          "Modelled school data with Advanced Custom Fields",
          "Structured rank, grade, exam success, annual cost and review data",
        ],
      },
      {
        title: "Custom listings & profiles",
        items: [
          "Built custom school listing and profile templates",
          "School cards show name, location, rank, overall grade, exam success rate and cost",
          "Category lists such as best schools and most diverse schools",
        ],
      },
      {
        title: "Map-based discovery",
        items: [
          "Implemented a custom map to explore schools by location",
          "“View on Map” control directly on listing pages",
          "Neighbourhood links from each school card",
        ],
      },
      {
        title: "Advanced filters & search",
        items: [
          "“Find a school or district” search",
          "Advanced filters by school type, ranking, languages, fees and more",
          "Removable filter chips and result counts",
        ],
      },
      {
        title: "Rankings, reviews & comparisons",
        items: [
          "Connected listings to rankings with a methodology page",
          "Review access on every school card",
          "Save-to-list and dedicated school comparison workflows",
        ],
      },
      {
        title: "Responsive layouts & navigation",
        items: [
          "Created responsive page layouts across the platform",
          "Mobile menu, sign-up links and discovery calls to action",
          "Consistent experience across listings, profiles and rankings",
        ],
      },
    ],
    tech: [
      "WordPress Development",
      "Advanced Custom Fields (ACF)",
      "Custom Post Types",
      "Custom Map Integration",
      "Advanced Filtering",
      "Search Functionality",
      "Custom Listing Templates",
      "Rankings & Reviews",
      "Comparison Workflows",
      "Responsive Front-End",
    ],
    outcome:
      "A complete school discovery platform for France, where families can search, filter, map and compare schools in one place. Structured ACF data and a custom post type keep every school profile consistent and easy to manage, while rankings, reviews, saved lists and comparisons turn raw school information into confident decisions.",
    achievement:
      "Turned structured school data into a searchable, map-based discovery platform with advanced filters, rankings, reviews, saved lists and side-by-side school comparison, all built on WordPress.",
    highlights: [
      { title: "Custom school listings", text: "Rank, grade, exam success, cost and reviews on every school card." },
      { title: "Map & advanced filters", text: "Explore schools on a map and narrow results with detailed filters." },
      { title: "Compare & save", text: "Dedicated comparison page and a personal saved-schools list." },
      { title: "ACF + custom post type", text: "Structured school data that's consistent and easy to manage." },
    ],
  },
  {
    slug: "niktravels",
    title: "NIK Travels",
    url: "https://niktravels.com/",
    category: "Platform",
    industry: "Travel Marketplace",
    location: "West Balkans",
    platform: "WordPress + HivePress",
    role: "WordPress / HivePress Developer",
    projectType: "Travel Marketplace & Booking Discovery",
    tags: ["HivePress", "Travel", "Marketplace"],
    cover: "/work/niktravels.jpg",
    gallery: ["/work/niktravels-2.jpg", "/work/niktravels-3.jpg"],
    summary:
      "A WordPress and HivePress travel marketplace connecting visitors with Balkan tours, local experiences and accommodation hosts, with categorised listings, search, tailor-made trip requests, host messaging and integrated travel search.",
    brief:
      "NIK Travels is a travel discovery platform connecting travellers with Balkan tours, local experiences and accommodation hosts. The site brings curated itineraries, destination experiences and host rentals into one searchable marketplace, where visitors can explore destinations, browse listings by category, review trip details and contact the travel team or hosts.",
    approach:
      "I built NIK Travels with WordPress and HivePress as a travel marketplace for curated tours, destination experiences and trusted-host rentals. I configured the listing categories and marketplace pages, and shaped the listing experience around the travel details that matter, destination, itinerary, duration and price.",
    specialization: ["HivePress marketplace setup", "Listing categories & pages", "Travel listing experience", "Search & lead capture"],
    responsibilities: [
      {
        title: "WordPress & HivePress marketplace",
        items: [
          "Built the travel marketplace with WordPress and HivePress",
          "Set up the platform for curated tours, experiences and host rentals",
          "Created the marketplace pages visitors browse and book from",
        ],
      },
      {
        title: "Listing categories",
        items: [
          "Configured marketplace categories: Balkan selections, destination experiences and trusted-host rentals",
          "Organised listings so visitors can browse by category",
          "Category selector alongside the listing search",
        ],
      },
      {
        title: "Travel listing experience",
        items: [
          "Shaped listings around destination, itinerary, duration and price",
          "Listing cards show tour type, start and end points, duration and price",
          "Message and save controls on every listing card",
        ],
      },
      {
        title: "Search & travel inspiration",
        items: [
          "Listing search with keyword and category filters",
          "Homepage carousels featuring destinations, programmes and curated itineraries",
          "Embedded Expedia Group widget for stay and flight search",
        ],
      },
      {
        title: "Tailor-made requests & host messaging",
        items: [
          "Tailor-made trip requests so visitors can receive offers from hosts",
          "Direct communication with hosts from listings",
          "Saved listings for trips visitors want to come back to",
        ],
      },
      {
        title: "Lead capture",
        items: [
          "Mailing list sign-up",
          "Contact form for trip and service enquiries",
          "Clear calls to action throughout the marketplace",
        ],
      },
    ],
    tech: [
      "WordPress Development",
      "HivePress Marketplace",
      "Listing Categories",
      "Marketplace Pages",
      "Listing Search & Filters",
      "Host Messaging",
      "Tailor-made Request Flow",
      "Expedia Widget Integration",
      "Mailing List & Contact Forms",
      "Responsive Front-End",
    ],
    outcome:
      "A searchable travel marketplace that brings Balkan tours, local experiences and host rentals together in one place. Visitors can discover destinations, compare itineraries by duration and price, request tailor-made trips, message hosts and search stays and flights, all without leaving the site.",
    achievement:
      "Built a WordPress and HivePress travel marketplace that combines curated tours, experiences and trusted-host rentals with categorised search, tailor-made trip requests, host messaging and integrated travel search.",
    highlights: [
      { title: "Inspiration + search", text: "Destination carousels with keyword and category search always to hand." },
      { title: "Itinerary cards", text: "Tour type, start/end city, duration and price for quick comparison." },
      { title: "Tailor-made requests", text: "Visitors describe their trip and receive offers from hosts." },
      { title: "Integrated travel search", text: "Expedia Group widget for stays and flights." },
    ],
  },
  {
    slug: "lacartes",
    title: "La Carte S",
    url: "https://www.lacartes.fr/",
    category: "Platform",
    industry: "Youth Benefits & Discounts",
    location: "France",
    platform: "WordPress + HivePress",
    role: "WordPress / HivePress Developer",
    projectType: "Digital Benefits Membership Platform",
    tags: ["HivePress", "Membership", "Directory"],
    cover: "/work/lacartes.jpg",
    gallery: ["/work/lacartes-2.jpg", "/work/lacartes-3.jpg", "/work/lacartes-4.jpg"],
    summary:
      "A WordPress and HivePress digital benefits platform for 18–30-year-olds, organising local partner offers by city and category, with membership and listing pages for discovering discounts and participating businesses.",
    brief:
      "La Carte S is a digital benefits card for 18–30-year-olds, connecting members with discounts and offers from local businesses, events and partner brands. The platform needed to help young people discover offers by city and category, learn about partner businesses and get the digital card.",
    approach:
      "I built La Carte S with WordPress and HivePress, creating the site pages and structuring the benefits directory around offers, cities and business partners. I configured the membership and listing experiences to connect cardholders with participating businesses and their offers.",
    specialization: ["HivePress directory", "Membership experience", "Offers by city & category", "Partner profiles"],
    responsibilities: [
      {
        title: "WordPress & HivePress platform",
        items: [
          "Built La Carte S with WordPress and HivePress",
          "Created the site pages for members and partners",
          "Promotional content explaining the benefits and how to get the card",
        ],
      },
      {
        title: "Benefits directory",
        items: [
          "Structured the directory around offers, cities and business partners",
          "Offer listings with partner name, location, description and conditions",
          "Offer types such as discounts and permanent offers",
        ],
      },
      {
        title: "City & category browsing",
        items: [
          "Browse offers by city: Montpellier, Narbonne, Gruissan and more",
          "Category browsing by business type, from restaurants to sports",
          "Keyword search and filters on the offers page",
        ],
      },
      {
        title: "Partner profiles",
        items: [
          "Partner pages with logo, membership date and social links",
          "Contact options so members can message partners",
          "All of a partner's offers listed on their profile",
        ],
      },
      {
        title: "Membership & digital card",
        items: [
          "Configured the membership experience around the digital card",
          "Membership page presenting the card and available plans",
          "Member account links for sign-in and card access",
        ],
      },
      {
        title: "Listings & discovery",
        items: [
          "Configured listing experiences connecting cardholders with businesses",
          "Map view of participating partners",
          "Featured offers and new partners on the homepage",
        ],
      },
    ],
    tech: [
      "WordPress Development",
      "HivePress Directory",
      "Membership Configuration",
      "Offer Listings",
      "City & Category Taxonomies",
      "Partner (Vendor) Profiles",
      "Partner Messaging",
      "Search & Filters",
      "Map Listings",
      "Responsive Front-End",
    ],
    outcome:
      "A digital benefits platform where 18–30-year-olds can discover local discounts by city and category, explore participating businesses and get the digital card, bringing members and partner businesses together in one WordPress directory.",
    achievement:
      "Built a WordPress and HivePress benefits directory that organises partner offers by city and category and connects cardholders with participating businesses through membership, listing and partner pages.",
    highlights: [
      { title: "Offers by city & category", text: "Discover discounts from Montpellier to Narbonne, by business type." },
      { title: "Partner profiles", text: "Business pages with contact options and all their offers." },
      { title: "Digital membership card", text: "Membership page with the card and available plans." },
      { title: "Search, filters & map", text: "Find offers by keyword, filter by city and browse on a map." },
    ],
  },
  {
    slug: "musicmes",
    title: "MusicMes",
    url: "https://musicmes.com/",
    category: "Platform",
    industry: "Online Music Education",
    platform: "WordPress + HivePress",
    role: "WordPress / HivePress Developer",
    projectType: "Online Music Teacher Marketplace",
    tags: ["HivePress", "EdTech", "Marketplace"],
    cover: "/work/musicmes.jpg",
    gallery: ["/work/musicmes-2.jpg", "/work/musicmes-3.jpg", "/work/musicmes-4.jpg"],
    summary:
      "A WordPress and HivePress marketplace for online music lessons, helping students discover teachers by instrument, review teacher profiles and connect with instructors, with free learning resources alongside.",
    brief:
      "MusicMes connects students with online music teachers. The platform promotes affordable lessons, flexible scheduling and detailed teacher profiles, with courses, printouts, music sheets, quizzes and daily practice materials available alongside the marketplace.",
    approach:
      "I built MusicMes with WordPress and HivePress, creating a marketplace where students discover music teachers by instrument and view their profiles. I organised the teacher listings and instrument categories, and connected profile pages with messaging and review information.",
    specialization: ["HivePress marketplace", "Teacher listings & profiles", "Instrument categories", "Messaging & reviews"],
    responsibilities: [
      {
        title: "WordPress & HivePress marketplace",
        items: [
          "Built the online lessons marketplace with WordPress and HivePress",
          "Set up the platform for teachers and students",
          "Teacher sign-up path alongside student onboarding",
        ],
      },
      {
        title: "Instrument categories",
        items: [
          "Organised teachers by instrument: piano, guitar, violin, drums, vocals, bass and more",
          "Instrument filter on the Find Teachers page",
          "Instruments menu for quick category browsing",
        ],
      },
      {
        title: "Teacher listings",
        items: [
          "Listing cards with lesson title, teacher, instrument and price per 30 minutes",
          "Ratings, review counts, lessons taught and students where available",
          "Free-trial badges and sorting by rating",
        ],
      },
      {
        title: "Teacher profiles",
        items: [
          "Profile pages with photo, verified badge, membership date and instruments taught",
          "Teacher biography and all of their lesson listings",
          "Review information connected to each profile",
        ],
      },
      {
        title: "Messaging & member access",
        items: [
          "Students can message teachers after signing in",
          "Save teachers to come back to later",
          "Full teacher directory available to logged-in members",
        ],
      },
      {
        title: "Onboarding & resources",
        items: [
          "Homepage guides new students: sign up, find a teacher, start a lesson plan",
          "Links to courses, printouts, music sheets, quizzes and daily practice",
          "Testimonials, FAQs and an Our Mission page to build trust",
        ],
      },
    ],
    tech: [
      "WordPress Development",
      "HivePress Marketplace",
      "Teacher Listings",
      "Vendor / Teacher Profiles",
      "Instrument Categories & Filters",
      "Ratings & Reviews",
      "User Messaging",
      "Member Access Control",
      "Learning Resources Pages",
      "Responsive Front-End",
    ],
    outcome:
      "An online music lessons marketplace where students can find the right teacher by instrument, compare profiles with ratings, lessons and pricing, and get in touch, with free learning resources that keep them practising between lessons.",
    achievement:
      "Built a WordPress and HivePress teacher marketplace that connects students with music instructors through instrument categories, detailed teacher profiles, reviews and messaging.",
    highlights: [
      { title: "Find teachers by instrument", text: "Instrument categories and filters across piano, guitar, violin, drums, vocals and more." },
      { title: "Rich teacher profiles", text: "Ratings, reviews, lessons taught, students and pricing." },
      { title: "Student–teacher messaging", text: "Signed-in students can contact teachers directly." },
      { title: "Learning resources", text: "Courses, printouts, music sheets, quizzes and daily practice." },
    ],
  },
  {
    slug: "adam-chronister",
    title: "Adam Chronister",
    url: "https://adamchronister.com/",
    category: "Personal Brand",
    industry: "AI Marketing · Author & Speaker",
    platform: "WordPress + custom plugin",
    role: "WordPress Developer / Custom Plugin Developer",
    projectType: "Email Access System for AI Marketing Tools",
    tags: ["Custom Plugin", "AI Tools", "WordPress"],
    cover: "/work/adam-chronister.jpg",
    gallery: ["/work/adam-chronister-2.jpg", "/work/adam-chronister-3.jpg", "/work/adam-chronister-4.jpg", "/work/adam-chronister-5.jpg"],
    summary:
      "A custom WordPress plugin for Adam Chronister's AI marketing tools, a password-free, email-based access flow that delivers links to three tools in one message, supports access recovery and redirects visitors who arrive without an access link.",
    brief:
      "Adam Chronister's site presents his book, marketing expertise and podcast appearances alongside three AI marketing tools: the Ebook Generator, Press Release Generator and Podcast Pitch Studio. The tools needed to reach readers easily, without forcing anyone to create an account or remember a password, while still keeping access controlled.",
    approach:
      "I developed a custom WordPress plugin that provides email-based access to all three tools. Visitors open a shared request form from the Apps page, submit their email and receive one email containing links to all three tools. Submitting the same email again resends the links, so users can always recover access. The plugin also controls how visitors reach the tool pages, removing them from normal discovery, excluding them from search and redirecting anyone without an access link back to the Apps page, where the request popup opens.",
    specialization: ["Custom plugin development", "Password-free access flow", "Transactional email delivery", "Access control & redirects"],
    responsibilities: [
      {
        title: "Custom WordPress plugin",
        items: [
          "Built a custom plugin to manage access to three AI marketing tools",
          "No user accounts or passwords required",
          "Integrated cleanly into the existing WordPress site",
        ],
      },
      {
        title: "One form, three tools",
        items: [
          "A single shared request form opened from the Apps page",
          "One submission grants access to the Ebook Generator, Press Release Generator and Podcast Pitch Studio",
          "Request popup that opens directly on the Apps page",
        ],
      },
      {
        title: "Email-based access delivery",
        items: [
          "One email delivers links to all three tools",
          "Password-free experience for readers and marketers",
          "Simple, low-friction way to get users into the tools",
        ],
      },
      {
        title: "Access recovery",
        items: [
          "Submitting the same email again resends the access links",
          "Users can always recover access without support requests",
          "No password-reset flow needed",
        ],
      },
      {
        title: "Access control & redirects",
        items: [
          "Tool pages removed from normal site discovery",
          "Tool pages excluded from search",
          "Visitors without an access link are redirected to the Apps page with the request popup open",
        ],
      },
      {
        title: "Site integration",
        items: [
          "Tools showcased alongside the book, marketing and podcast content",
          "Apps & Tools section linking each tool from the public site",
          "Consistent experience across the brand site and the tools",
        ],
      },
    ],
    tech: [
      "Custom WordPress Plugin",
      "PHP",
      "WordPress Hooks & Filters",
      "Email Delivery",
      "Access Links",
      "Access Control",
      "Redirect Logic",
      "Search Exclusion",
      "Popup Request Form",
      "AI Tool Integration",
    ],
    outcome:
      "A frictionless way for readers and marketers to start using Adam's AI tools: one email address unlocks all three, access can be recovered at any time by requesting the links again, and the tool pages stay out of public discovery so access remains controlled.",
    achievement:
      "Built a password-free, email-based access system that delivers three AI marketing tools in a single email, supports self-service access recovery, and redirects visitors who arrive without an access link.",
    highlights: [
      { title: "Password-free access", text: "One email address unlocks all three AI tools." },
      { title: "One email, three tools", text: "Ebook Generator, Press Release Generator and Podcast Pitch Studio." },
      { title: "Self-service recovery", text: "Request again with the same email to resend the links." },
      { title: "Controlled tool pages", text: "Hidden from discovery and search, with redirects for direct visits." },
    ],
  },
  {
    slug: "clarus-healthcare",
    title: "Clarus Healthcare",
    url: "https://clarushealthcare.co.uk/",
    category: "Business",
    industry: "Home Care & Healthcare",
    location: "Worcestershire, UK",
    platform: "WordPress",
    role: "WordPress Developer",
    projectType: "Home Care Website",
    tags: ["WordPress", "Healthcare", "Responsive"],
    cover: "/work/clarus-healthcare.jpg",
    gallery: ["/work/clarus-healthcare-2.jpg", "/work/clarus-healthcare-3.jpg"],
    summary:
      "A WordPress website for Clarus Healthcare that presents its home care and companionship services, explains its person-centred approach and guides families toward making an enquiry.",
    brief:
      "Clarus Healthcare provides domiciliary care across Worcestershire. Its website needed to introduce compassionate, person-centred support and help visitors, often worried family members, understand the services quickly and get in touch about care for themselves or a loved one.",
    approach:
      "I built a WordPress website that organises the service information, explains the company's person-centred approach and guides prospective clients and families toward an enquiry, with dedicated service pages, clear calls to action throughout, location and careers sections, and privacy and cookie consent built in.",
    specialization: ["WordPress website build", "Service page structure", "Enquiry-focused UX", "Privacy & consent"],
    responsibilities: [
      {
        title: "WordPress website build",
        items: [
          "Built the Clarus Healthcare website on WordPress",
          "Responsive layouts across desktop, tablet and mobile",
          "Clear navigation for services, locations, careers and contact",
        ],
      },
      {
        title: "Service pages",
        items: [
          "Dedicated pages for home care, companionship and specialist care",
          "Service overview cards on the homepage",
          "Content structured so families find the right support fast",
        ],
      },
      {
        title: "Enquiry paths",
        items: [
          "Contact links and calls to action throughout the homepage",
          "Persistent “Contact Us” button in the header",
          "Clear next step for clients and family members",
        ],
      },
      {
        title: "Care approach content",
        items: [
          "Independence, dignity and person-centred care",
          "Safeguarding and feedback information",
          "Technology-friendly support messaging",
        ],
      },
      {
        title: "Locations & careers",
        items: [
          "Location information highlighting the Worcestershire service area",
          "Careers section for prospective applicants",
          "Supports local search and recruitment alongside enquiries",
        ],
      },
      {
        title: "Privacy & cookie consent",
        items: [
          "Privacy and cookie information pages",
          "Cookie consent controls for visitors",
          "Clear information on how visitor data is used",
        ],
      },
    ],
    tech: [
      "WordPress Development",
      "Responsive Page Layouts",
      "Service Page Templates",
      "Calls to Action & Enquiry Paths",
      "Contact Links",
      "Careers Section",
      "Location Pages",
      "Cookie Consent Controls",
      "Navigation & Menus",
      "Content Organisation",
    ],
    outcome:
      "A warm, trustworthy website that presents Clarus Healthcare's services clearly, explains its person-centred approach and makes it easy for families across Worcestershire to take the next step, with careers and privacy information supporting the wider business.",
    achievement:
      "Delivered a WordPress home care website that organises services, communicates a compassionate care approach and guides prospective clients and families toward making an enquiry.",
    highlights: [
      { title: "Clear service architecture", text: "Home care, companionship and specialist care, each with its own page." },
      { title: "Enquiry-focused", text: "Calls to action and contact paths throughout the site." },
      { title: "Person-centred content", text: "Independence, dignity, safeguarding and feedback explained clearly." },
      { title: "Careers & compliance", text: "Recruitment section plus privacy and cookie consent controls." },
    ],
  },
  {
    slug: "becoming-your-best",
    title: "Becoming Your Best",
    url: "https://www.becomingyourbest.com/",
    category: "Business",
    industry: "Corporate Training & Leadership",
    platform: "WordPress",
    role,
    tags: ["WordPress", "WooCommerce", "Corporate"],
    cover: "/work/becoming-your-best.jpg",
    gallery: ["/work/becoming-your-best-2.jpg", "/work/becoming-your-best-3.jpg"],
    summary:
      "A leadership and productivity training company website with clear solution paths, events and certification.",
    brief:
      "Becoming Your Best Global Leadership trains teams and leaders worldwide. The site needed to present a broad offer, solutions, learning, events, certification and a store, to corporate buyers without overwhelming them.",
    approach:
      "A confident editorial layout with large typography and an orange accent leads with three words: Productivity, Time-Management, Leadership. A 'Trusted by leading organizations' logo strip earns credibility early, and a 'Choose a solution' grid guides buyers to the right programme.",
    highlights: [
      { title: "Enterprise credibility", text: "A client logo strip directly under the hero shows the calibre of organisations that use the programmes." },
      { title: "Guided solution paths", text: "Numbered solution cards (Prioritize, Solve, Develop, Align) turn a complex offer into simple choices." },
      { title: "Mega-menu navigation", text: "Solutions, Learning, Events, Certification, Industries and Resources are organised for quick scanning." },
      { title: "Premium photography", text: "Duotone imagery and generous whitespace give the brand a polished, corporate feel." },
    ],
  },
];

export const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))] as const;

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
