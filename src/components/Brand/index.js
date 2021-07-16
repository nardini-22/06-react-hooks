import { React, useState, useEffect } from "react";
import axios from "axios";

import "./style.css"

function Brand({ action, info }) {
  const [data, setData] = useState([{ nome: "" }]);
  useEffect(() => {
    axios
      .get(`https://parallelum.com.br/fipe/api/v1/${info.type}/marcas`)
      .then((response) => setData(Object.values(response.data)))
      .catch((error) => console.log(error));
  }, [info]);

  return (
      <div>
        <select value={info.brand}
          onChange={(e) => {
            action.setBrand(e.target.value);
            action.setModel("")
            action.setYear("")
          }}
        >
          
          <option key="defaultBrand" value="" disabled selected >
            Select a brand
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

export default Brand;
