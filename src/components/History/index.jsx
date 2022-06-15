import styles from "./styles.module.scss";

function History({ data }) {
  return (
    <div>
      <h2 className={styles.title}>History</h2>
      <div className={data.length > 0 ? styles.container : null}>
        {data.map((x, i) => {
          return (
            <div key={i} className={styles.wrap}>
              <div className={styles.action}>{x.action}</div>

              <div>
                ({x.before} ➜ {x.after})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default History;
