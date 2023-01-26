import "./App.css";
import { Header } from "./components/header/Header";
import { Aside } from "./components/aside/aside";
import List from "./components/list/list";
import { Footer } from "./components/footer/Footer";
import { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "./constants";

export const App = () => {
  const [data, setData] = useState([]);
  let int = Date.now().toString().slice(-3);
  const [isSorted, setIsSorted] = useState(false);

  const handleAddItem = () => {
    setData((prev) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(prev.concat(int)));
      return [...prev, int];
    });
  };

  const handleSort = () => {
    setIsSorted(!isSorted);
    let sorted = data.sort();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(sorted));
    setData((prev) => {
      return prev.sort();
    });
  };

  const handleDelete = (num) => {
    let filter = data.filter((item) => item !== num);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filter));
    setData(filter);
  };

  useEffect(() => {
    if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
      localStorage.setItem(LOCAL_STORAGE_KEY, "[]");
    } else if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
      setData(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
      console.log(localStorage.getItem(LOCAL_STORAGE_KEY), "lllooo");
    }
  }, []);

  return (
    <div className="app">
      <div className="main">
        <Header onAdd={handleAddItem} onSort={handleSort} />
        <List items={data} onDelete={handleDelete} />
        <Footer />
      </div>

      <div className="aside">
        <Aside />
      </div>
    </div>
  );
};
