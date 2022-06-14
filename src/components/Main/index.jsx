import { useState, useEffect } from "react";
import History from "../History";
import styles from "./styles.module.scss";
function Main() {
  const [total, setTotal] = useState(0);
  const [history, setHistory] = useState([
    {
      action: "",
      before: "",
      after: "",
    },
  ]);

  const [undo, setUndo] = useState();
  const [redo, setRedo] = useState();

  const minusOne = () => {
    setTotal(total + -1);
    setHistory([...history, { action: -1, before: total, after: total + -1 }]);
  };
  const plusOne = () => {
    setTotal(total + 1);
  };

  const undoAction = () => {
    //remove last object in history arr and store it into a state
    if (history.length > 1) {
      setUndo(history.pop());
    }
  };

  const redoAction = () => {
    history.push(redo);
    setTotal(redo.after);
    setRedo();
  };
  useEffect(() => {
    // if undo exists, then reset total to previous number and set undo back to undefined
    if (undo) {
      setTotal(undo.before);
      setRedo(undo);
      setUndo();
      console.log(undo, "u");
      console.log(redo, "r");
    }
  }, [undo, total, redo]);

  return (
    <div className={styles.outer}>
      <div>
        <button onClick={undoAction}>UNDO</button>
        <button
          onClick={redoAction}
          disabled={redo === undefined ? true : false}
        >
          REDO
        </button>
      </div>
      <div className={styles.main}>
        <button onClick={minusOne}>-1</button>
        <div>{total}</div>
        <button onClick={plusOne}>+1</button>
      </div>
      <History data={history} />
      {undo ? (
        <div>
          {undo.action}
          {undo.before}
          {undo.after}
        </div>
      ) : null}
    </div>
  );
}

export default Main;
