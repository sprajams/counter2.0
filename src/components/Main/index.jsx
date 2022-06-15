import { useState, useEffect } from "react";
import History from "../History";
import ActionBtn from "../ActionBtn";
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
  const [redo, setRedo] = useState([]);

  useEffect(() => {
    // if undo exists, then reset total to previous number and set undo back to undefined
    if (undo) {
      setTotal(undo.before);
      setRedo([...redo, undo]);
      setUndo();
    }
  }, [undo, total, redo]);

  // update history when user clicks on action button
  const onClick = (value) => {
    setHistory([
      {
        action: (value > 0 ? `+` : `-`) + Math.abs(value),
        before: total,
        after: total + value,
      },
      ...history,
    ]);
  };

  const undoAction = () => {
    //remove last object in history arr and store it into a state
    if (history.length > 1) {
      setUndo(history.shift());
    }
  };

  const redoAction = () => {
    const newestRedo = redo.pop();
    history.unshift(newestRedo);
    setTotal(newestRedo.after);
  };

  return (
    <div className={styles.outer}>
      <div>
        <button onClick={undoAction}>UNDO</button>
        <button onClick={redoAction} disabled={redo.length > 0 ? false : true}>
          REDO
        </button>
      </div>
      <div className={styles.main}>
        <ActionBtn setTotal={setTotal} value={-100} onClick={onClick} />
        <ActionBtn setTotal={setTotal} value={-10} onClick={onClick} />
        <ActionBtn setTotal={setTotal} value={-1} onClick={onClick} />
        <div>{total}</div>
        <ActionBtn setTotal={setTotal} value={1} onClick={onClick} />
        <ActionBtn setTotal={setTotal} value={10} onClick={onClick} />
        <ActionBtn setTotal={setTotal} value={100} onClick={onClick} />
      </div>
      <History data={history.slice(0, -1)} />
    </div>
  );
}

export default Main;
