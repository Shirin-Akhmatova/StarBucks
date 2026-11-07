import styles from "./Footer.module.scss";

const footerColumns = [
  {
    title: "About Us",
    links: [
      "Our Company",
      "Our Coffee",
      "About Starbucks",
      "Starbucks Archive",
    ],
  },
  {
    title: "Careers",
    links: [
      "Culture and Values",
      "Belonging at Starbucks",
      "College Achievement Plan",
    ],
  },
  {
    title: "Social Impact",
    links: ["People", "Planet", "Environmental and Social Impact Reporting"],
  },
  {
    title: "For Business",
    links: [
      "Landlord Support Center",
      "Suppliers",
      "Corporate Gift Card Sales",
    ],
  },
  {
    title: "Order and Pick Up",
    links: [
      "Order on the App",
      "Order on the Web",
      "Delivery",
      "Order and Pick Up Options",
    ],
  },
];

const socialLinks = [
  {
    label: "Spotify",
    symbol: "♪",
    href: "https://open.spotify.com/user/starbucks",
  },
  {
    label: "Instagram",
    symbol: "◎",
    href: "https://www.instagram.com/starbucks/",
  },
  {
    label: "YouTube",
    symbol: "▶",
    href: "https://www.youtube.com/user/Starbucks",
  },
  {
    label: "Facebook",
    symbol: "f",
    href: "https://www.facebook.com/Starbucks/",
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.columns}>
          {footerColumns.map((column) => (
            <div className={styles.column} key={column.title}>
              <h3>{column.title}</h3>

              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.divider} />

        <div className={styles.socials}>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              {social.symbol}
            </a>
          ))}
        </div>

        <nav className={styles.legal}>
          <a href="#privacy">Privacy Notice</a>
          <a href="#terms">Terms of Use</a>
          <a href="#accessibility">Accessibility</a>
          <a href="#cookies">Cookie Preferences</a>
        </nav>

        <p className={styles.copyright}>
          © 2026 Starbucks Coffee Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
