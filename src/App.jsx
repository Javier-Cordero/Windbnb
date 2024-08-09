import { useState, useEffect } from "react";
import { Nav } from "./components/Nav/Nav";
import { Header } from "./components/Header/Header";
import { Container } from "./components/Contenedor/Container";
export default function App() {
  const [stays, setStays] = useState([])
  const [data, setData] = useState([])
  async function getData() {
    const rs = await fetch('stays.json');
    const jsonRs = await rs.json();
    setStays(jsonRs);
    setData(jsonRs);
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <Nav setStays={setStays} data={data} />
      <Header stays={stays} />
      <Container stays={stays} />
    </div>
  );
}
