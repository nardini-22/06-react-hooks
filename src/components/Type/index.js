import { React } from "react";

function Type({ action, info}) {
  return (
      <div>
        <select value={info}
          onChange={(e) => {
            action.setType(e.target.value)
            action.setBrand("")
            action.setModel("")
            action.setYear("")
          }}
        >
          <option key="defaultType" value="" disabled selected>
            Select a type
          </option>
          <option key="car" value="carros">
            Cars
          </option>
          <option key="motos" value="motos">
            Motorcycles
          </option>
          <option key="trucks" value="caminhoes">
            Trucks
          </option>
        </select>
      </div>
  );
}

export default Type;
