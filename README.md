# Movie Streaming App

A modern web application to discover and watch movies using the KinoPoisk API. Built with Next.js, React 19, and powerful client-side tooling.

> **Note**: The player, may not work without a VPN due to geo-restrictions.

---

## Features

- Browse and search for movies
- Detailed movie pages with metadata
- Responsive UI with carousels for trending, top-rated, etc.
- Toast notifications for user feedback
- Smart API caching and fetching with React Query
- Smooth navigation using Next.js and React 19

---

## Tech Stack

- **Framework**: Next.js
- **UI Library**: React 19
- **State/Data Fetching**: @tanstack/react-query
- **HTTP Client**: Axios
- **Carousel**: swiper
- **Notifications**: react-toastify
- **Progress Bar**: @bprogress/next
- **Testing**: jest, testing-library

---

## Getting Started

#### 1. Clone the repository

```bash
git clone https://github.com/SmokeGuap/nxmedia.git
cd nxmedia
```

#### 2. Install dependencies

```bash
npm install
# or
yarn install
```

#### 2. Install dependencies

```bash
npm install
# or
yarn install
```

#### 3. Create .env file

Create a .env file in the root directory and add your KinoPoisk token:

```bash
NEXT_KINOPOISK_KEY=your_token_here
```

> You can generate your API token by registering on [@poiskkinodev_bot](https://t.me/poiskkinodev_bot). **(Free tier allows up to 200 requests per day)**

#### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

##### Open http://localhost:3000 to view the app in your browser.
