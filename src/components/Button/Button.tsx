import styles from "./Button.module.scss";

type ButtonProps = {
  text: string;
  onClick: () => void;
  backgroundColor?: string;
  width: number;
  borderColor?: string;
  fontWeight?: number;
};

const Button = ({
  text,
  onClick,
  backgroundColor,
  width,
  borderColor,
  fontWeight,
}: ButtonProps) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      style={{
        background: backgroundColor,
        width: `${width}px`,
        border: borderColor ? `1px solid ${borderColor}` : undefined,
        fontWeight: fontWeight,
      }}
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;
