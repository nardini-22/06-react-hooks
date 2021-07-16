import { React, useState } from "react";
import Brand from "./components/Brand";
import Type from "./components/Type";
import Modelo from "./components/Modelo";
import Year from "./components/Year";
import Button from "./components/Button";
import Modal from "./components/Modal";

import "./App.css";

function App() {
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState("");
  const [modal, setModal] = useState({
    display: false,
    error: false,
  });

  return (
    <>
      <div className="header">
        <h4>Tabela FIPE</h4>
      </div>
      <div className="container">
        <div className="content">
          <Type action={{ setType, setBrand, setModel, setYear }} info={type} />
          <Brand
            action={{ setBrand, setModel, setYear }}
            info={{ type, brand }}
          />
          <Modelo
            action={{ setModel, setYear }}
            info={{ type, brand, model }}
          />
          <Year action={setYear} info={{ type, brand, model, year }} />
          <Button
            action={{ setResult, setType, setBrand, setModel, setYear }}
            info={{ type, brand, model, year }}
            display={setModal}
          />
        </div>
        <Modal
            action={() => {
              setModal(!modal);
            }}
            info={result}
            display={modal}
          />
      </div>
    </>
  );
}

export default App;
