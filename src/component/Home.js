import React from 'react'
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const toApp = () => {
    navigate("/App");
  }
  return (
    <div className="container text-center mt-5">
    <h1 className="text-primary">Halo, React dengan Bootstrap!</h1>
    <button className="btn btn-success" onClick={toApp}>Klik Saya</button>
  </div>
  )
}

export default Home