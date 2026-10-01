"use client";

import { useState } from "react";

import styles from "./Comfort.module.css";

const cards = [
  {
    icon: "Vector",
    title: "You save.",
    text: "Browse our comfort sets and save 15% when you bundle.",
  },
  {
    icon: "Group4402",
    title: "We ship.",
    text: "We ship your items within 1–2 days of receiving your order.",
  },
  {
    icon: "Group4467",
    title: "You enjoy!",
    text: "Wear harness around the house, out on the town, or in bed.",
  },
];

const Comfort = () => {
  const [activeCard, setActiveCard] = useState(0);

  const handlePrev = () => {
    setActiveCard((current) =>
      current === 0 ? cards.length - 1 : current - 1,
    );
  };

  const handleNext = () => {
    setActiveCard((current) =>
      current === cards.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Comfort made easy</h2>

        <div className={styles.cardsWrapper}>
          <button
            className={`${styles.sliderButton} ${styles.prev}`}
            type="button"
            onClick={handlePrev}
            aria-label="Previous benefit"
          >
            ‹
          </button>

          <div className={styles.cards}>
            {cards.map((card, index) => (
              <article
                className={`${styles.card} ${
                  activeCard === index ? styles.activeCard : ""
                }`}
                key={card.title}
              >
                <svg className={styles.icon} aria-hidden="true">
                  <use href={`/icons/sprite.svg#${card.icon}`} />
                </svg>

                <h3 className={styles.cardTitle}>{card.title}</h3>

                <p className={styles.cardText}>{card.text}</p>
              </article>
            ))}
          </div>

          <button
            className={`${styles.sliderButton} ${styles.next}`}
            type="button"
            onClick={handleNext}
            aria-label="Next benefit"
          >
            ›
          </button>
        </div>

        <button className={styles.cta} type="button">
          <span>Customize Your Outfit</span>
          <span className={styles.ctaArrow}>→</span>
        </button>

        <div className={styles.rating}>
          <span className={styles.stars}>★★★★★</span>
          <span className={styles.ratingText}>
            Over 500+ 5 Star Reviews Online
          </span>
        </div>
      </div>
    </section>
  );
};

export default Comfort;
