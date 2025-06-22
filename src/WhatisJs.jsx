import "./globalpages.css"
function WhatisJs() {
  return (
    <>
      <div className="top">
        <span>
          JavaScript (JS) is a scripting or programming language primarily used
          to make webpages interactive. It allows developers to implement
          complex features, such as dynamic content updates, interactive maps,
          animations, and more, that go beyond simply displaying static
          information.
        </span>
        <img src="./javascript.png" alt="javascript pic" />
      </div>

      <h4>Core Technology:</h4>
      <p>
        JavaScript is one of the core technologies of the World Wide Web,
        alongside HTML and CSS.
      </p>

      <h4>Client-Side Scripting:</h4>
      <p>
        It primarily runs on the user's web browser, meaning it doesn't require
        a server-side component.
      </p>

      <h4>Dynamic Content:</h4>
      <p>
        JavaScript allows for dynamic content, meaning that web page elements
        can change and update without requiring a full page reload.
      </p>

      <h4>Interactive Features:</h4>
      <p>
        It's used to create interactive elements like dropdown menus, form
        validation, and animations.
      </p>

      <h4>Beyond Web Browsers:</h4>
      <p>
        While most known for web development, JavaScript is also used in other
        environments like Node.js, which allows it to be used for server-side
        programming.
      </p>
    </>
  );
}

export default WhatisJs;
