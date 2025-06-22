import "./globalpages.css"
function WhatisReact() {
  return (
    <>
    <div className="top">
      <span>
        React is a JavaScript library for building user interfaces (UIs). It is
        maintained by Facebook and a community of individual developers and
        companies.
      </span>
      <img src="./react.png" alt="recat pic" />
    </div>

      <h4>Component-Based Architecture:</h4>
      <p>
        React applications are built using self-contained, reusable components
        that manage their own state and render a specific part of the UI. These
        components can be combined to create complex user interfaces.
      </p>

      <h4>Declarative Programming:</h4>
      <p>
        React uses a declarative approach, meaning developers describe what the
        UI should look like for a given state, and React handles the updates
        efficiently when data changes.
      </p>

      <h4>Virtual DOM:</h4>
      <p>
        React utilizes a virtual DOM, an in-memory representation of the actual
        browser DOM. When the state of a component changes, React first updates
        the virtual DOM, then efficiently calculates the differences and updates
        only the necessary parts of the real DOM, leading to improved
        performance.
      </p>

      <h4>Unidirectional Data Flow:</h4>
      <p>
        React typically follows a unidirectional data flow, where data flows
        from parent components to child components, making it easier to
        understand and debug the application's state.
      </p>

      <h4>Flexibility:</h4>
      <p>
        While primarily used for web development, React's core principles can be
        applied to other platforms, such as mobile applications (React Native)
        and even desktop applications.
      </p>
    </>
  );
}

export default WhatisReact;
