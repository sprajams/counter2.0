import styles from "./styles.module.scss";

function History({ data }) {
  return (
    <div>
      <h2 className={styles.title}>History</h2>
      <div className={data.length > 1 ? styles.container : null}>
        {data.map((x, i) => {
          return i > 0 ? (
            <div key={i} className={styles.wrap}>
              <div className={styles.num}>#{i}</div>
              <div className={styles.action}>{x.action}</div>

              <div>
                ({x.before} ➜ {x.after})
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default History;
