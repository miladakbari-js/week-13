import "./globalpages.css";
function NextJs() {
  return (
    <>
      <div className="top">
        <span>
          Next.js is an open-source web development framework created by the
          private company Vercel providing React-based web applications with
          server-side rendering and static rendering.
        </span>
        <img src="./nextjs.png" alt="nextjs pic" />
      </div>

      <h4>Description:</h4>
      <p>
        Next.js is a React framework that enables several extra features,
        including server-side rendering and static rendering. React is a
        JavaScript library that is traditionally used to build web applications
        rendered in the client's browser with JavaScript. Developers recognize
        several problems with this strategy however, such as not catering to
        users who do not have access to JavaScript or have disabled it,
        potential security issues, significantly extended page loading times,
        and harm to the site's overall search engine optimization. Frameworks
        such as Next.js sidestep these problems by allowing some or all of the
        website to be rendered on the server-side before being sent to the
        client. Next.js is one of the most popular frameworks for React. It is
        one of several recommended "toolchains" available when starting a new
        app, all of which provide a layer of abstraction to aid in common
        tasks.Next.js requires Node.js and can be initialized using npm.
      </p>

      <h4>Styling and features:</h4>
      <p>
        Next.js supports styling with CSS as well as precompiled Scss and Sass,
        CSS-in-JS, and styled JSX. In addition, it is built with TypeScript
        support and smart bundling. The open-source transpiler SWC is used
        to transform and compile code into JavaScript usable by a browser.
        Webpack, another open-source tool, is used to bundle the modules
        afterward, however it is currently being replaced with TurboPack.
        All of these tools are used with npm in a terminal. The main feature
        of Next.js is its use of server-side rendering to reduce the burden on
        web browsers and provide enhanced security. This can be
        done for any part of the application or the entire system, allowing for
        content-rich pages to be singled out for server-side rendering. It
        can also be done only for first-time visitors, to reduce the burden on
        web browsers that have yet to download any of the site's assets. The
        "hot reloading" feature detects changes as they are made and re-renders
        the appropriate pages so the server avoids the need to be restarted.
        This allows changes made to the application code to be immediately
        reflected in the web browser, though some browsers will require the page
        to be refreshed. The software uses page-based routing for developer
        convenience and includes support for dynamic routing. Other features
        include hot-module replacement so that modules can be replaced live,
        automatic code splitting, which only includes code necessary to load the
        page, and page prefetching to reduce load time. Next.js also supports
        Incremental Static Regeneration and static site generation - a
        compiled version of the website is usually built during build time and
        saved as a .next folder. When a user makes a request, the pre-built
        version which are static HTML pages are cached and sent to them. This
        makes the load time very fast, but it's not suitable for every website,
        particularly for interactive sites that change often and utilize a lot
        of user input.
      </p>
    </>
  );
}

export default NextJs;
