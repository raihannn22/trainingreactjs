import React, { useState } from "react";
import axios from "axios";
export default function AxiosExample() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      {" "}
      <ul>
        {" "}
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}{" "}
      </ul>{" "}
      <button onClick={() => handleClick()}>Load Data</button>{" "}
    </div>
  );
}
