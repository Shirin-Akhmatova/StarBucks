import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <a href="/" className={styles.logo}>
          StarBucks
        </a>

        <nav className={styles.nav}>
          <a href="#menu">Home</a>
          <a href="#rewards">Select</a>
          <a href="#gift-cards">Shop</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
