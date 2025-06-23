import "./App.css";
import { useState } from "react";
import WhatisReact from "./WhatisReact";
import WhatisJs from "./WhatisJs";
import HtmlCss from "./HtmlCss";
import NextJs from "./NextJs";
import Modal from "./Modal";

function App() {
  const tab = localStorage.getItem("tab");
  const [activeTab, setActiveTab] = useState(tab);
  localStorage.setItem("tab", activeTab);

  const clickHandler = (event) => {
    const tabName = event.target.dataset.name;
    console.log(tabName);
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "react":
        return <WhatisReact />;

      case "javascript":
        return <WhatisJs />;

      case "htmlcss":
        return <HtmlCss />;

      case "nextjs":
        return <NextJs />;
      default:
        return <Modal/>;
    }
  };
  return (
    <>
      <div className="container">
        <header>
          <h1>Task-week13</h1>
          <nav>
            <button
              onClick={clickHandler}
              data-name="htmlcss"
              className={activeTab === "htmlcss" ? "selected" : ""}
            >
              HTML-CSS
            </button>
            <button
              onClick={clickHandler}
              data-name="javascript"
              className={activeTab === "javascript" ? "selected" : ""}
            >
              JavaScript
            </button>
            <button
              onClick={clickHandler}
              data-name="react"
              className={activeTab === "react" ? "selected" : ""}
            >
              React
            </button>

            <button
              onClick={clickHandler}
              data-name="nextjs"
              className={activeTab === "nextjs" ? "selected" : ""}
            >
              NextJs
            </button>
          </nav>
        </header>

        <main>{renderContent()}</main>
        <footer>
          <p>developed by Milad Akbari - Botostart BOOTCAMP</p>
        </footer>
      </div>
    </>
  );
}

export default App;
