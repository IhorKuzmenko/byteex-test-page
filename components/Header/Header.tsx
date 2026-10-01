import Image from 'next/image';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.announcement}>
        <p className={styles.desktopAnnouncement}>
          CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)
          <span className={styles.divider}>|</span>
          FREE SHIPPING on orders &gt; $200
          <span className={styles.divider}>|</span>
          easy 45 day return window.
        </p>

        <p className={styles.mobileAnnouncement}>
          FREE SHIPPING on orders &gt; $200
        </p>
      </div>

      <div className={`container ${styles.container}`}>
        <Image
          className={styles.logo}
          src="/images/Logotype.png"
          alt="Byteex"
          width={150}
          height={40}
          priority
        />
      </div>
    </header>
  );
};

export default Header;