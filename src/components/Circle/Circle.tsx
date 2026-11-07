import styles from "./Circle.module.scss";

type CircleProps = {
  width?: number;
  height?: number;
  top?: number;
  left?: number;
  right?: number;
};

function Circle({
  width = 324,
  height = 324,
  top = 100,
  left = -150,
  right,
}: CircleProps) {
  return (
    <div className={styles.circle_container}>
      <div
        className={`${styles.circle} ${styles.circleOne}`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          top: `${top}px`,
          left: left !== undefined ? `${left}px` : undefined,
          right: right !== undefined ? `${right}px` : undefined,
        }}
      />
    </div>
  );
}

export default Circle;
