import React from "react";
import { useQuery } from "@tanstack/react-query";
const fetchData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};
export default function ReactQuery() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ul>
      {" "}
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}{" "}
    </ul>
  );
}
