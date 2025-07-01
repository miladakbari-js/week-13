import topics from "./constants/data.js";
import "./App.css";
import { useEffect, useState } from "react";
import Content from "./components/Content.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  const tab = localStorage.getItem("tab");
  const [activeTab, setActiveTab] = useState(tab === "null" || !tab ? null : tab);
  

  useEffect(() => {
    if (activeTab) {
      localStorage.setItem("tab", activeTab);
    }
  }, [activeTab]);

  return (
    <>
      <div className="container">
        <header>
          <h1>Task-week13</h1>
          <nav>
            {topics.map((item) => (
              <button
                onClick={() => setActiveTab(item.name.toLowerCase())}
                data-name={item.name.toLowerCase()}
                key={item.id}
                className={
                  activeTab === item.name.toLowerCase() ? "active" : ""
                }
              >
                {item.name}
              </button>
            ))}
          </nav>
        </header>
        <main>
          {activeTab === null && <Modal />}
          {topics.map((item) =>
            item.name.toLowerCase() === activeTab ? (
              <Content key={item.id} data={item} />
            ) : null
          )}
        </main>
        <footer>
          <p>developed by Milad Akbari - Botostart BOOTCAMP</p>
        </footer>
      </div>
    </>
  );
}

export default App;
