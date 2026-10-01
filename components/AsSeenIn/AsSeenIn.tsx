import Image from "next/image";

import styles from "./AsSeenIn.module.css";

const logos = [
  {
    src: "/images/Artboard3_1.png",
    alt: "Eco-Stylist",
  },
  {
    src: "/images/Artboard6_1.png",
    alt: "Canadian Living",
  },
  {
    src: "/images/Artboard4_1.png",
    alt: "Jillian Harris",
  },
  {
    src: "/images/Artboard2_1.png",
    alt: "The Eco Hub",
  },
  {
    src: "/images/Artboard5_1.png",
    alt: "TrendHunter",
  },
];

const AsSeenIn = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <p className={styles.title}>as seen in</p>

        <div className={styles.logos}>
          {logos.map((logo, index) => (
            <div
              className={`${styles.logoItem} ${
                index > 2 ? styles.mobileHidden : ""
              }`}
              key={logo.src}
            >
              <Image
                className={styles.logo}
                src={logo.src}
                alt={logo.alt}
                width={190}
                height={60}
              />
            </div>
          ))}
        </div>

        <div className={styles.pagination} aria-hidden="true">
          <span />
          <span className={styles.activeDot} />
          <span />
        </div>
      </div>
    </section>
  );
};

export default AsSeenIn;
