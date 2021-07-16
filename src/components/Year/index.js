import { React, useState, useEffect } from "react";
import axios from "axios";

function Year({ action, info }) {
  const [data, setData] = useState([{ nome: "" }]);
  useEffect(() => {
    axios
      .get(
        `https://parallelum.com.br/fipe/api/v1/${info.type}/marcas/${info.brand}/modelos/${info.model}/anos`
      )
      .then((response) => setData(Object.values(response.data)))
      .catch((error) => console.log(error));
  }, [info]);

  return (
    <div>
      <select value={info.year}
        onChange={(e) => {
          action(e.target.value);
        }}
      >
        <option key="defaultYear" value="" disabled selected>
          Select a year
        </option>
        {data.map((e) => {
          return (
            <option key={e.codigo} value={e.codigo}>
              {e.nome}
            </option>
          )
        })}

      </select>
    </div>
  );
}

export default Year;
