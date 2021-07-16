import { React, useState, useEffect } from "react";
import axios from "axios";

function Modelo({ action, info }) {
  const [data, setData] = useState([{ nome: "" }]);
  useEffect(() => {
    axios
      .get(
        `https://parallelum.com.br/fipe/api/v1/${info.type}/marcas/${info.brand}/modelos`
      )
      .then((response) => setData(Object.values(response.data.modelos)))
      .catch((error) => console.log(error));
  }, [info]);

  return (
    <div>
      <select value={info.model}
        onChange={(e) => {
          action.setModel(e.target.value);
          action.setYear("");
        }}
      >
        <option key="defaultModel" value="" disabled selected>
          Select a model
        </option>
        {data.map((e) => {
          return (
            <option key={e.codigo} value={e.codigo}>
              {e.nome}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Modelo;
