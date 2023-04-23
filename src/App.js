import React, { useEffect, useRef, useState } from "react";
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

const App = () => {
  const [start, setStart] = useState(0);
  const data = makeTableData(5, 10_000);
  const ref = useRef();
  const getTopHeight = () => {
    return ROW_HEIGHT * start;
  };

  const getBottomHeight = () => {
    return ROW_HEIGHT * (data.length - (start + VISIBLE_ROWS));
  };

  const onScroll = (e) => {
    setStart(Math.floor(e.target.scrollTop / ROW_HEIGHT));
  };

  useEffect(() => {
    ref.current.addEventListener("scroll", onScroll);
    return () => {
      ref.current.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      <div
        style={{ height: ROW_HEIGHT * VISIBLE_ROWS + 1, overflow: "auto" }}
        ref={ref}
      >
        <div style={{ height: getTopHeight() }}></div>
        <table>
          <tbody>
            {data
              .slice(start, start + VISIBLE_ROWS + 1)
              .map((row, rowIndex) => (
                <tr
                  key={`row-${start + rowIndex}`}
                  style={{ height: ROW_HEIGHT }}
                >
                  {row.map((text, colIndex) => (
                    <td key={`col-${start + colIndex}`}>{text}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        <div style={{ height: getBottomHeight() }}></div>
      </div>
    </div>
  );
};

export default App;
