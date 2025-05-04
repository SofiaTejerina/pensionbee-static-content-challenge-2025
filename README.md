# Static content challenge

Visit the project site here.

## About the project

Business Scenario: Acme Co's marketing department want a simple content management system and you've been tasked with building the MVP.

The challenge here is to create a full-stack JavaScript application that returns webpages at URLs that match the paths of the folders and sub-folders in the `content` folder. The content of these pages should come from a combination of the template HTML file and a markdown file containing the content.

For example, for a folder called `about-page`, a request to `/about-page` would return a HTML page created from the `template.html` template and the `about-page/index.md` content file. The `template.html` file contains a `{{content}}` placeholder that would be replaced by the content for each page. A request to `/blog/june/company-update` would return a HTML page using the content file at `blog/june/company-update/index.md`.

As a modern full-stack JavaScript app MVP, the application should use an effective mix of technologies, although there is a requirement to use React on the front-end to fit in with Acme Co's other websites.

Acme's marketing department should be able to add extra folders to the `content` folder and the application should work with those without any requiring any code changes.

This repository contains a `template.html` template file and a sample `content` folder with sub-folders containing `index.md` markdown files (or other sub-folders).

## Run the project and tests

To run the project you must install the dependencies:

```shell
npm install
```

Then run the project:
```shell
npm run dev
```

And to run the tests:
```shell
npm run test
```

## Add more entries
To have more web entries you just need to add you markdown file named `index.md` into the  `src/content` folder.

The file must be inside folders with the name of the url you want for that page.

For example, if you want to show a page in `acme.com/about-page` you should save that markdown file inside a folder named "about-page".

## Technologies

### NextJS

NextJS is a framework build to use with React to develop web applications.

#### Why

Here is a list why I choose this framework:
- Easy to set up and start developing fast.
- Easy to work with [dynamic routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes).
- More experience with.
- Easy deploy with vercel for POCs.
- Use the template as layout easily.
- Contains a mdx (https://mdxjs.com/) package (https://nextjs.org/docs/app/guides/mdx) to get React components from markdown files.


### TypeScript
- More secure because of type validation.
- Make code easier to read and to understand.

### MDX
Even if I finally chose the mdx package from NextJS I also have in mind other libraries that do the same.

**[MDX Plugin of NextJS](https://nextjs.org/docs/app/guides/mdx#using-dynamic-imports)**
- The most easy to set up and use.
- Less code needed to complete the requirements of the project.
- Secure to XSS attacks because the transformation to JavaScript is done on build time.

**[Markdown to JSX](https://www.npmjs.com/package/markdown-to-jsx)**
- secure of XSS (cross side scripting) (not dangerouslySetInnerHTML https://legacy.reactjs.org/docs/dom-elements.html).
- based on simple markdown, other open source project (https://www.npmjs.com/package/@khanacademy/simple-markdown).
- complete and easy to read documentation.
- easy to use.
- light and trustable with lot weekly downloads (>3M) (more community using it, more trouble shooting and support you will find).

**[React Markdown](https://www.npmjs.com/package/react-markdown)**
- Similar than Markdown to JSX.
- Lighter than Markdown to JSX and with more downloads (>4M).
- Documentation hard to read.
- Has more customizations that aren't necessary here, so just add complex to the POC.

### Testing
**[Jest](https://jestjs.io/)**
I used Jest as a test framework. Because I found that all the blogs I read to do the tests use jest. Also, my only experience doing test on React was using jest.

**[React testing library](https://testing-library.com/docs/react-testing-library/intro/)**
To use with Jest to test React components, in the blogs and documentations is allways used with Jest.

### Setup:
To set up the tests environment I followed the [NextJS documentation](https://nextjs.org/docs/app/guides/testing/jest).

### Style
To add style to the web application I used [Tailwind](https://tailwindcss.com/) and [Flowbite](https://flowbite.com/), they are easy to use and fast to learn for a POCs.

Here is an example of the results of styling the components obtain from the markdown.

<img width="1624" alt="Screenshot 2025-05-03 at 8 07 44 PM" src="https://github.com/user-attachments/assets/48da5a56-e12e-45cb-9f27-6c43f157b4ab" />
<img width="1372" alt="Screenshot 2025-05-03 at 8 08 42 PM" src="https://github.com/user-attachments/assets/3c715135-310a-4cfd-ac81-268520a15c68" />


### Deployment
I chose [Vercel](https://vercel.com/docs) to do the deployment because of the easy integration with NextJS. In just minutes your project could be delivered, which is the important part of the POC.

## Implementation

### Layout
Has the template provided for the challenge.

### Components
**ClientMDX:** to isolate the client component, this component is client because the mdx package use hooks like useContext to generate the React component from the markdown.

### mdxLoader
Put the logic to import dynamically the component isolate to make easier to mock for the unit tests.

### mdx components
Here I defined the customizations in the html components used to create the React Component based on the markdown file.
Is necessary to use the MDX package of NextJS.

### Globals css
Here I defined customizations in css and import tailwind packages to use it on the code.

## Future steps

### Use SSG
- SSR and SSG is perfect for the requirements of the project and better for the SEO.
- To use SSG, I need a backend to read the folders and return all the posible paths, with that create the `generateStaticParams`.

