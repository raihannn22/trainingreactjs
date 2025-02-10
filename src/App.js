import "./App.css";
import { useState, useEffect, useMemo } from "react";
import Button from "./button";
import Genap from "./genap";
import Ganjil from "./ganjil";

const label = "haloo";

function App() {
  const [text, setText] = useState("Hello, React!");
  const label = "CLLICKK";
  const [click, setClick] = useState(0);

  const Button2 = () => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <h2> angka </h2>
        <p> jumlah : {count} </p>
        <button onClick={() => setCount(count + 1)}>Tambah angka</button>
        <button onClick={() => setCount(count / 2)}>reset</button>
      </div>
    );
  };

  const NameForm = () => {
    const [tempName, setTempName] = useState(""); // Menyimpan input sementara
    const [name, setName] = useState(""); // Menyimpan nama yang ditampilkan
    const handleSubmit = () => {
      setName(tempName); // Saat tombol ditekan, update `name`
    };
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Halo, {tempName ? tempName : "Silakan isi nama!"}</h2>
        <input
          type="text"
          placeholder="Masukkan nama"
          value={tempName}
          onChange={(e) => setTempName(e.target.value)} // Update input sementara
        />
        {/* <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
          Ubah Nama
        </button> */}
      </div>
    );
  };

  // useEffect(() => {
  //   if (click === 5) {
  //     console.log("ini yang ke lima");
  //   } else {
  //     console.log("jumlah = ", click);
  //   }
  // }, [click]);

  const result2 = useMemo(() => {
    if (click === 0) {
      return <p>nol</p>;
    } else if (click % 2 == 0) {
      return <Genap />;
    } else {
      return <Ganjil />;
    }
  }, [click]);

  const decrement = () => {
    if (click > 0) {
      setClick(click - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>haloo Rehan</h1>
        <hr size="3" width="100%" color="red" />

        <NameForm />
        <hr size="3" width="100%" color="red" />

        <Button2 label={label} judul={text} />
        <hr size="3" width="100%" color="red" />

        <p>{click}</p>
        <Button label="Tambah" handler={() => setClick(click + 1)} />
        <Button label="Kurang" handler={() => setClick(click - 1)} />
        <Button label="Reset" handler={() => setClick(0)} />

        {result2}
      </header>
    </div>
  );
}

export default App;
