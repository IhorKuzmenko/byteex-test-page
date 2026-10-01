import Image from "next/image";

import styles from "./Hero.module.css";

const benefits = [
  {
    icon: "Group4467",
    text: "Beautiful, comfortable loungewear for day or night.",
  },
  {
    icon: "Vector",
    text: "No wasteful extras, like tags or plastic packaging.",
  },
  {
    icon: "Vector1",
    text: "Our signature fabric is incredibly comfortable – unlike anything you’ve ever felt.",
  },
];

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Don&apos;t apologize for being
            <br />
            comfortable.
          </h1>

          <ul className={styles.benefits}>
            {benefits.map((benefit) => (
              <li className={styles.benefit} key={benefit.text}>
                <span className={styles.iconWrapper}>
                  <svg className={styles.benefitIcon} aria-hidden="true">
                    <use href={`/icons/sprite.svg#${benefit.icon}`} />
                  </svg>
                </span>

                <p>{benefit.text}</p>
              </li>
            ))}
          </ul>

          <a className={styles.cta} href="#shop">
            <span>Customize Your Outfit</span>

            <svg
              className={styles.arrow}
              width="23"
              height="10"
              aria-hidden="true"
            >
              <use href="/icons/sprite.svg#Vector2" />
            </svg>
          </a>

          <div className={styles.review}>
            <div className={styles.reviewHeader}>
              <Image
                className={styles.avatar}
                src="/images/color_wheel.png"
                alt=""
                width={38}
                height={38}
              />

              <div className={styles.reviewInfo}>
                <div className={styles.reviewMeta}>
                  <span className={styles.reviewName}>Amy P.</span>

                  <div className={styles.stars} aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        width="11"
                        height="10"
                        aria-hidden="true"
                        key={index}
                      >
                        <use href="/icons/sprite.svg#star4" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className={styles.verified}>Verified Buyer</p>
              </div>
            </div>

            <p className={styles.reviewText}>
              Overjoyed with my Loungewear set. I have the jogger and the
              sweatshirt. Quality product on every level. From the compostable
              packaging, to the supplied washing bag, even the garments smells
              like fresh herbs when I first held them.
            </p>
          </div>
        </div>

        <div className={styles.visual}>
          <Image
            className={styles.heroImage}
            src="/images/Group_6034.png"
            alt="Women wearing Byteex loungewear"
            width={620}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
