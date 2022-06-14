import styles from "./styles.module.scss";

function History({ data }) {
  return (
    <div>
      <h2>History</h2>
      {data.map((x, i) => {
        return (
          <div key={i} className={styles.wrap}>
            <div>{x.action}</div>
            <div>{x.before}</div>
            <div>{x.after}</div>
          </div>
        );
      })}
    </div>
  );
}

export default History;
