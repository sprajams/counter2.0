import { useState, useEffect } from "react";
import History from "../History";
import ActionBtn from "../ActionBtn";
import styles from "./styles.module.scss";
function Main() {
  const [total, setTotal] = useState(0);
  // const [history, setHistory] = useState([
  //   {
  //     action: "",
  //     before: "",
  //     after: "",
  //   },
  // ]);

  const [undo, setUndo] = useState();
  const [redo, setRedo] = useState();

  // const onClick = () => {
  //   // setTotal(total + -1);
  //   // setHistory([...history, { action: -1, before: total, after: total + -1 }]);
  //   console.log("click clack");
  // };

  // const undoAction = () => {
  //   //remove last object in history arr and store it into a state
  //   if (history.length > 1) {
  //     setUndo(history.pop());
  //   }
  // };

  // const redoAction = () => {
  //   history.push(redo);
  //   setTotal(redo.after);
  //   setRedo();
  // };
  // useEffect(() => {
  //   // if undo exists, then reset total to previous number and set undo back to undefined
  //   if (undo) {
  //     setTotal(undo.before);
  //     setRedo(undo);
  //     setUndo();
  //   }
  // }, [undo, total, redo]);

  return (
    <div className={styles.outer}>
      <div>
        {/* <button onClick={undoAction}>UNDO</button>
        <button
          onClick={redoAction}
          disabled={redo === undefined ? true : false}
        >
          REDO
        </button> */}
      </div>
      <div className={styles.main}>
        <ActionBtn setTotal={setTotal} value={-100} />
        <ActionBtn setTotal={setTotal} value={-10} />
        <ActionBtn setTotal={setTotal} value={-1} />
        <div>{total}</div>
        <ActionBtn setTotal={setTotal} value={1} />
        <ActionBtn setTotal={setTotal} value={10} />
        <ActionBtn setTotal={setTotal} value={100} />
      </div>
      {/* <History data={history} /> */}
    </div>
  );
}

export default Main;
