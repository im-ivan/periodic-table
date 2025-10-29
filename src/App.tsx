import { useState } from "react";
import "./App.css";
import data from "./assets/data/periodic-table-elements.json";

type ElementFromJson = (typeof data.elements)[number];
const elements: ElementFromJson[] = data.elements;

interface IElementFieldProps {
  element: ElementFromJson;
}

const ElementField = ({ element }: IElementFieldProps) => {
  return (
    <tr key={element.number}>
      <td>{element.name}</td>
      <td>{element.appearance}</td>
    </tr>
  );
};

function App() {
  const [filter, filterSet] = useState("");
  return (
    <>
      <h1 className="text-center border">Title</h1>
      <input
        type="text"
        value={filter}
        onChange={(ev) => filterSet(ev.target.value)}
      />
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Appearence</th>
          </tr>
        </thead>
        <tbody>
          {elements
            .filter((element) => element.name.includes(filter))
            .slice(0, 11)
            .map((element) => (
              <ElementField key={element.number} element={element} />
            ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
