import React from "react";
import "./App.css";

const makeTableData = (w, h) => {
  return new Array(h).fill(0).map((_, row) => {
    return new Array(w).fill(0).map((_, col) => {
      return row * 10 + col;
    });
  });
};
const ROW_HEIGHT = 40;
const VISIBLE_ROWS = 3;

const getTopHeight = () => {
  return 0;
};
const getBottomHeight = () => {
  return 0;
};


const App = () => {
  const data = makeTableData(5, 10);

  return (
    <div style={{ height: ROW_HEIGHT * VISIBLE_ROWS + 1, overflow: "auto" }}>
      <div style={{ height: getTopHeight() }}></div>

      <table>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`} style={{ height: ROW_HEIGHT }}>
              {row.map((text, colIndex) => (
                <td key={`col-${colIndex}`}>{text}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ height: getBottomHeight() }}></div>
    </div>
  );
};

export default App;
