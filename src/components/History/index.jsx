import styles from "./styles.module.scss";

function History({ data }) {
  return (
    <div>
      <h2 className={styles.title}>History</h2>
      {data.map((x, i) => {
        if (i > 0) {
          return (
            <div key={i} className={styles.wrap}>
              <div>#{i}</div>
              <div>{x.action}</div>
              <div>{x.before}</div>
              <div>{x.after}</div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default History;
