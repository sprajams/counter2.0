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
  const [redo, setRedo] = useState();

  useEffect(() => {
    // if undo exists, then reset total to previous number and set undo back to undefined
    if (undo) {
      setTotal(undo.before);
      setRedo(undo);
      setUndo();
    }
  }, [undo, total, redo]);

  // update history when user clicks on action button
  const onClick = (value) => {
    setHistory([
      ...history,
      { action: value, before: total, after: total + value },
    ]);
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
        <ActionBtn setTotal={setTotal} value={-100} onClick={onClick} />
        <ActionBtn setTotal={setTotal} value={-10} onClick={onClick} />
        <ActionBtn setTotal={setTotal} value={-1} onClick={onClick} />
        <div>{total}</div>
        <ActionBtn setTotal={setTotal} value={1} onClick={onClick} />
        <ActionBtn setTotal={setTotal} value={10} onClick={onClick} />
        <ActionBtn setTotal={setTotal} value={100} onClick={onClick} />
      </div>
      <History data={history} />
    </div>
  );
}

export default Main;