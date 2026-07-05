// Central data source for all projects. Add a new object here and it
// automatically becomes available at /project-detail.html?id=<id>
export const projects = [
  {
    id: 'auth-api',
    icon: 'AUTH',
    title: 'Backend Authentication API',
    tagline: 'Secure, role-based authentication service for multi-user applications.',
    description:
      "A production-style authentication service built to handle everything an app needs around identity: signup, login, password hashing, and role-based access control. Tokens are issued as JWTs with short-lived access tokens and refresh-token rotation, and every protected route runs through middleware that checks both authentication and authorization before hitting the database.",
    techStack: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'bcrypt'],
    liveLink: 'https://dev-pulse-ashen-zeta.vercel.app/',
    githubLink: 'https://github.com/Mohaimen-Hridoy/devpulse',
    challenges: [
      'Designing refresh-token rotation so a stolen token can\u2019t be replayed after logout, without forcing the user to re-login constantly.',
      'Keeping role-based permission checks in one place (middleware) instead of scattered across route handlers, so new roles don\u2019t require touching every endpoint.',
      'Hashing and comparing passwords safely under load without adding noticeable latency to login requests.'
    ],
    improvements: [
      'Add OAuth (Google/GitHub) login alongside email/password.',
      'Move refresh tokens to httpOnly cookies for stronger XSS protection.',
      'Add rate limiting on login attempts to reduce brute-force risk.'
    ],
    featured: true
  },
  {
    id: 'justice-tracker',
    icon: 'LAW',
    title: 'Justice Tracker API',
    tagline: 'RESTful API for managing petitioners, lawyers, and judges with full CRUD.',
    description:
      "A structured backend for tracking case-related entities \u2014 petitioners, lawyers, and judges \u2014 with clearly modeled relationships between them. Built around a normalized relational schema so that case history, assignments, and status updates stay consistent as records grow.",
    techStack: ['Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    liveLink: '',
    githubLink: '',
    challenges: [
      'Modeling many-to-many relationships (a lawyer can handle multiple cases, a case can involve multiple parties) without duplicating data.',
      'Keeping the CRUD API consistent across three different entity types while avoiding repetitive controller code.',
      'Validating incoming data thoroughly so malformed records never reach the database layer.'
    ],
    improvements: [
      'Add pagination and filtering on list endpoints for large datasets.',
      'Add a search endpoint to look up cases by petitioner or lawyer name.',
      'Write automated tests for the core CRUD flows.'
    ],
    featured: true
  },
  {
    id: 'ecommerce-backend',
    icon: 'SHOP',
    title: 'E-Commerce Backend',
    tagline: 'Full backend API for auth, product catalog, orders, and payment status.',
    description:
      "A complete e-commerce backend covering the core flows a storefront needs: user authentication, a product catalog with categories, an order pipeline, and payment status tracking. The schema is designed so that inventory, pricing, and order history all stay in sync as orders move through their lifecycle.",
    techStack: ['Express', 'Prisma', 'PostgreSQL', 'JWT'],
    liveLink: '',
    githubLink: '',
    challenges: [
      'Keeping product stock counts accurate when multiple orders are placed for the same item at the same time.',
      'Designing the order/payment status flow so it\u2019s easy to extend with a real payment gateway later.',
      'Structuring the product catalog schema to support categories and variants without over-complicating queries.'
    ],
    improvements: [
      'Integrate a real payment gateway (SSLCommerz / Stripe).',
      'Add an admin-only set of endpoints for managing inventory.',
      'Add order status webhooks/notifications.'
    ],
    featured: false
  },
  {
    id: 'football-ticket-booking',
    icon: 'FTB',
    title: 'Football Ticket Booking System',
    tagline: 'Relational database design for match ticketing with booking management.',
    description:
      "A database-first project focused on modeling a real-world ticketing system: matches, seats, user roles, bookings, and payment status, all tied together with proper constraints so double-booking a seat is impossible at the database level, not just the application level.",
    techStack: ['PostgreSQL', 'SQL', 'ERD'],
    liveLink: '',
    githubLink: 'https://github.com/Mohaimen-Hridoy/football-ticket-booking',
    challenges: [
      'Designing constraints so the same seat can never be double-booked for the same match, even under concurrent requests.',
      'Normalizing the schema across matches, venues, seats, and bookings without making common queries too expensive.',
      'Modeling payment status transitions (pending \u2192 paid \u2192 refunded) cleanly at the database level.'
    ],
    improvements: [
      'Wrap the schema in a proper Express API instead of raw SQL scripts.',
      'Add a seat-map UI on top of the schema.',
      'Add refund and cancellation workflows.'
    ],
    featured: false
  }
];

export function getProjectById(id) {
  return projects.find((p) => p.id === id);
}
