const topics = [
  {
    id: 1,
    name: "Htmlcss",
    description:
      "HTML, which stands for HyperText Markup Language, is the standard language for creating web pages. It provides the structure and layout of content on the internet, enabling browsers to display text, images,and other multimedia elements",
    image: "./htmlcss.png",
    title1: "Structure",
    title2: "Content",
    title3: "Foundation for the Web",
    title4: "Examples",
    desc1:
      "HTML uses tags and elements to define the structure of a webpage, such as headings, paragraphs, links, and images.",
    desc2:
      "It dictates how content is organized and displayed on a web page,essentially telling the browser how to render the information.",
    desc3:
      "HTML is the building block of the web and is used in conjunction with CSS (for styling) and JavaScript (for interactivity) to create complete and dynamic web experiences.",
    desc4:
      "HTML is used to create everything from simple text pages to complex websites with multimedia content and interactive features.",
  },
  {
    id: 2,
    name: "javascript",
    description:
      "JavaScript (JS) is a scripting or programming language primarily used to make webpages interactive. It allows developers to implement complex features, such as dynamic content updates, interactive maps,animations, and more, that go beyond simply displaying static information.",
    title1: "Core Technology",
    title2: "Client-Side Scripting",
    title3: "Dynamic Content",
    title4: "Beyond Web Browsers",
    image: "./javascript.png",
    desc1:
      "JavaScript is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    desc2:
      "It primarily runs on the user's web browser, meaning it doesn't require a server-side component.",
    desc3:
      "JavaScript allows for dynamic content, meaning that web page elements can change and update without requiring a full page reload.",
    desc4:
      "While most known for web development, JavaScript is also used in other environments like Node.js, which allows it to be used for server-side programming.",
  },
  {
    id: 3,
    name: "react",
    description:
      "React is a JavaScript library for building user interfaces (UIs). It is maintained by Facebook and a community of individual developers and companies.",
    image: "./react.png",
    title1: "Component-Based Architecture",
    title2: "Declarative Programming",
    title3: "Virtual DOM",
    title4: "Flexibility",
    desc1:
      "React applications are built using self-contained, reusable components that manage their own state and render a specific part of the UI. These components can be combined to create complex user interfaces.",
    desc2:
      "React uses a declarative approach, meaning developers describe what the UI should look like for a given state, and React handles the updates efficiently when data changes.",
    desc3:
      "React utilizes a virtual DOM, an in-memory representation of the actual browser DOM. When the state of a component changes, React first updates the virtual DOM, then efficiently calculates the differences and updates only the necessary parts of the real DOM, leading to improved performance.",
    desc4:
      "While primarily used for web development, React's core principles can be applied to other platforms, such as mobile applications (React Native) and even desktop applications.",
  },
  {
    id: 4,
    name: "next",
    description:
      "Next.js is a React framework that enables several extra features,including server-side rendering and static rendering. React is a JavaScript library that is traditionally used to build web applications rendered in the client's browser with JavaScript. Developers ",
    image: "./nextjs.png",
    title1: "Built-in CSS and Sass support",
    title2: "File-based Routing",
    title3: "Image Optimization",
    title4: "Automatic Code Splitting",
    desc1:
      "Next.js offers native support for styling with CSS modules and Sass, and it can also be integrated with various CSS-in-JS libraries.",
    desc2:
      "It uses a simple, intuitive file-system-based routing system where pages are defined by files within a pages directory.",
    desc3:
      "It includes a built-in Image component that automatically optimizes images for performance, including lazy loading and responsive sizing.",
    desc4:
      "Next.js automatically splits your code into smaller chunks, loading only the necessary code for each page, which improves performance.",
  },
];

export default topics
