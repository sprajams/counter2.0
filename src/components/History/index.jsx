import styles from "./styles.module.scss";

function History({ data }) {
  return (
    <div>
      <h2 className={styles.title}>History</h2>
      <div className={styles.container}>
        {data.map((x, i) => {
          if (i > 0) {
            return (
              <div key={i} className={styles.wrap}>
                <div>#{i}</div>
                <div>{x.action}</div>
                <div className={styles.transformation}>
                  {x.before} ➜ {x.after}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default History;
