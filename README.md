# Static content challenge

Visit the project site [here](https://static-content-challenge-2025-seven.vercel.app/about-page).

## About the project

Business Scenario: Acme Co's marketing department want a simple content management system and you've been tasked with building the MVP.

The challenge here is to create a full-stack JavaScript application that returns webpages at URLs that match the paths of the folders and sub-folders in the `content` folder. The content of these pages should come from a combination of the template HTML file and a markdown file containing the content.

For example, for a folder called `about-page`, a request to `/about-page` would return a HTML page created from the `template.html` template and the `about-page/index.md` content file. The `template.html` file contains a `{{content}}` placeholder that would be replaced by the content for each page. A request to `/blog/june/company-update` would return a HTML page using the content file at `blog/june/company-update/index.md`.

As a modern full-stack JavaScript app MVP, the application should use an effective mix of technologies, although there is a requirement to use React on the front-end to fit in with Acme Co's other websites.

Acme's marketing department should be able to add extra folders to the `content` folder and the application should work with those without any requiring any code changes.

This repository contains a `template.html` template file and a sample `content` folder with sub-folders containing `index.md` markdown files (or other sub-folders).

## Run the project and tests

Install dependencies:

```shell
npm install
```

Run the project:

```shell
npm run dev
```

Run the tests:

```shell
npm run test
npm run e2e
```

## Add more entries

To add more web pages, simply add an `index.md` file under `src/content` inside a folder named for the desired URL.

For example, to serve `acme.com/about-page`, add: "src/content/about-page/index.md"


---

## Technologies

### Next.js

Next.js is a framework built on React for developing web applications.

**Why**
- Easy to set up and develop quickly
- Built‑in support for [dynamic routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- Familiar to the team
- Simple Vercel deployment for prototypes
- Easy to use `template.html` as a layout
- Includes MDX support (https://nextjs.org/docs/app/guides/mdx)

### TypeScript

- More secure with static type checking
- Code is easier to read and understand

### MDX

We chose Next.js’s MDX plugin, but considered others:

#### Next.js MDX plugin

- Easiest to set up
- Minimal code to meet project requirements
- XSS‑safe, since compilation happens at build time

#### [markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx)

- XSS‑safe (no [`dangerouslySetInnerHTML`](https://legacy.reactjs.org/docs/dom-elements.html))
- Based on the [simple‑markdown](https://www.npmjs.com/package/@khanacademy/simple-markdown) library
- Clear documentation
- Lightweight, widely used (>3M weekly downloads)

#### [react-markdown](https://www.npmjs.com/package/react-markdown)

- Similar to markdown‑to‑jsx
- Even lighter, with >4M weekly downloads
- Documentation can be harder to navigate
- Offers features beyond our needs, adding complexity

---

## Testing


### Unit testing

- **[Jest](https://jestjs.io/)**
  - Popular test framework; well supported in React tutorials
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)**
  - Standard for testing React components alongside Jest

Setup follows the [Next.js testing guide](https://nextjs.org/docs/app/guides/testing/jest).

### e2e testing
**[Playwright](https://nextjs.org/docs/pages/guides/testing/playwright?utm_source=chatgpt.com)**

A modern testing framework that supports automation across Chromium, Firefox, and WebKit.

**Content Isolation for Testing:**

Since the site uses static generation at build time, we need to ensure test content doesn't interfere with production content.
To achieve this, we use a script that:
- Copies test content into the content directory.
- Builds the project and runs tests.
- Removes the test content after tests complete.

## Style

We used **[Tailwind CSS](https://tailwindcss.com/)** and **[Flowbite](https://flowbite.com/)** for rapid, component‑driven styling.

<img width="1624" alt="Screenshot 2025-05-03 at 8 07 44 PM" src="https://github.com/user-attachments/assets/48da5a56-e12e-45cb-9f27-6c43f157b4ab" />
<img width="1372" alt="Screenshot 2025-05-03 at 8 08 42 PM" src="https://github.com/user-attachments/assets/3c715135-310a-4cfd-ac81-268520a15c68" />

---

## Deployment

We chose **[Vercel](https://vercel.com/docs)** for easy Next.js integration and fast prototype delivery.

---

## Implementation

### Layout

Uses the provided `template.html`.

### Components

**ClientMDX**: a client component that dynamically loads and renders MDX content. This component is client because the mdx package use hooks like useContext to generate the React component.

### mdxLoader

Encapsulates dynamic imports to simplify unit testing.

### mdx-components

Customizes HTML mappings for MDX content.

### globals.css

Imports Tailwind’s base, components, and utilities and defines any customizations.

---

## Future steps

### Customize each md file
Add metadata to customize each markdown file with [Frontmatter](https://nextjs.org/docs/app/guides/mdx#frontmatter)