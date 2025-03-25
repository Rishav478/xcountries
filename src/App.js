import { useState, useEffect } from "react";
import Card from "./Card";
import "./App.css";
import { fetchData } from "./api";

function App() {
  let [info, setInfo] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  const getdata = async () => {
    try {
      const ans = await fetchData();
      setInfo(ans);
      setLoading(false);
    } catch (e) {
      setError("Failed to load data");
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1 style={{ color: "red" }}>{error}</h1>;

  return (
    <div className="card">
      {info.map((el) => (
        <Card data={el} key={el.ccn3} />
      ))}
    </div>
  );
}

export default App;
