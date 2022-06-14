import { useState } from "react";
import History from "../History";
import styles from "./styles.module.scss";
function Main() {
  const [sum, setSum] = useState(0);
  const [history, setHistory] = useState([
    {
      action: "",
      before: "",
      after: "",
    },
  ]);
  const minusOne = () => {
    setSum(sum - 1);
    setHistory([...history, { action: -1, before: sum, after: sum - 1 }]);
  };
  const plusOne = () => {
    setSum(sum + 1);
  };
  return (
    <div className={styles.outer}>
      <div className={styles.main}>
        <button onClick={minusOne}>-1</button>
        <div>{sum}</div>
        <button onClick={plusOne}>+1</button>
      </div>

      <History data={history} />
    </div>
  );
}

export default Main;
