# Cavalo de Lata

<div align="center">
  <img src="https://img.shields.io/badge/Made%20with-Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white" alt="Made with Astro"/>
  <img src="https://img.shields.io/badge/Content-TinaCMS-00A3E0?style=for-the-badge&logo=tina&logoColor=white" alt="TinaCMS"/>
  <img src="https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS"/>
  <img src="https://img.shields.io/badge/Package%20Manager-Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun"/>
</div>

Cavalo de Lata is a non-profit organization (ONG) dedicated to rescuing, rehabilitating, and providing care for horses that have been victims of mistreatment and abandonment in Santa Cruz do Sul, RS, Brazil. Founded in 2017 by Ana Paula Knak and Jason Duani Vargas, the organization has become a reference in horse rescue, rehabilitation, and environmental education.

## Tech Stack

- [Astro](https://astro.build/) (main framework)
- [React](https://react.dev/) for interactive components
- [TailwindCSS](https://tailwindcss.com/) for styling
- [TinaCMS](https://tina.io/) for content management
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com/) for deployment
- [Bun](https://bun.sh/) for package management and scripts
- [Motion](https://motion.dev/) for animations

## Content Management

Content is managed by [TinaCMS](https://tina.io/). You can access the content management interface at [`/admin`](http://localhost:4321/admin) when running the project locally.

## Getting Started

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-org/cavalo-de-lata.git
   cd cavalo-de-lata
   ```

2. **Install dependencies:**

   ```sh
   bun install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root with the following (see below for details):

   ```env
   PUBLIC_TINA_CLIENT_ID=your_tina_client_id
   TINA_TOKEN=your_tina_token
   TINA_SEARCH_TOKEN=your_tina_search_token
   ```

4. **Run the development server:**

   ```sh
   bun run dev
   ```

   The site will be available at [http://localhost:4321](http://localhost:4321).

   You can access the TinaCMS admin at [http://localhost:4321/admin](http://localhost:4321/admin).

5. **Build for production:**
   ```sh
   bun run build
   ```

## Environment Variables

- `PUBLIC_TINA_CLIENT_ID`: TinaCMS client ID
- `TINA_TOKEN`: TinaCMS token
- `TINA_SEARCH_TOKEN`: TinaCMS search indexer token

## Project Structure

```
/
├── public/           # Static assets (images, icons, fonts, etc.)
├── src/
│   ├── assets/       # Images, icons, and visual assets
│   ├── components/   # UI and page components (Astro, React)
│   │   ├── pages/    # Page-specific components
│   │   ├── react/    # React components
│   │   ├── sections/ # Page sections
│   │   └── ui/       # Reusable UI components
│   ├── content/      # Markdown content and configuration
│   ├── layouts/      # Layout components
│   ├── pages/        # Astro pages and routes
│   ├── styles/       # Global styles and TailwindCSS
│   └── utils/        # Utility functions
├── tina/             # TinaCMS configuration
│   ├── collections/  # Content schema definitions
│   ├── components/   # TinaCMS UI components
│   └── config.ts     # TinaCMS configuration
├── package.json
└── astro.config.mjs
```

## Available Scripts

| Command                | Action                                       |
| :--------------------- | :------------------------------------------- |
| `bun install`          | Installs dependencies                        |
| `bun run dev`          | Starts local dev server at `localhost:4321`  |
| `bun run build`        | Build your production site to `./dist/`      |
| `bun run preview`      | Preview your build locally, before deploying |
| `bun run lint`         | Run ESLint to check code quality             |
| `bun run format`       | Format code with Prettier                    |
| `bun run format:check` | Check code formatting without making changes |

## Contributing

Pull requests and issues are welcome! Please open an issue to discuss major changes.

## License

MIT
