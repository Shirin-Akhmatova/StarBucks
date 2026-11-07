import Button from "../Button/Button";
import Circle from "../Circle/Circle";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={`container ${styles.container}`}>
        <div className={styles.title}>
          <span>
            New Cafe <br /> by
          </span>
          <span className={styles.starbucks}> StarBucks</span>
        </div>
        <p className={styles.description}>
          Have time to buy the most harmonious drinks in the <br /> new
          Starbucks coffee and don't forget about the discount!
        </p>
        <div className={styles.buttons_сontainer}>
          <Button
            text="Select a coffee"
            width={333.38}
            onClick={() => {}}
            backgroundColor="linear-gradient(90deg, #35c66b, #237249)"
          />
          <Button
            text="More"
            width={167.97}
            onClick={() => {}}
            backgroundColor="#121517"
            borderColor="#fff"
            fontWeight={400}
          />
        </div>
        <div className={styles.numbers_container}>
          <div>
            <h4 className={styles.number}>
              <span>9k</span>
              <span className={styles.plus}>+</span>
            </h4>
            <p className={styles.subtitle}>
              Premium <br /> Users
            </p>
          </div>
          <div>
            <h4 className={styles.number}>
              <span>2k</span>
              <span className={styles.plus}>+</span>
            </h4>
            <p className={styles.subtitle}>
              Happy <br /> Customer
            </p>
          </div>
          <div>
            <h4 className={styles.number}>
              <span>28</span>
              <span className={styles.plus}>+</span>
            </h4>
            <p className={styles.subtitle}>
              Awards <br /> Winning
            </p>
          </div>
        </div>
      </div>
      <Circle top={100} left={200} />
    </main>
  );
}
