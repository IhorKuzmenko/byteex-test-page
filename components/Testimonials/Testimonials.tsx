"use client";

import Image from "next/image";
import { useState } from "react";

import styles from "./Testimonials.module.css";

const reviews = [
  {
    name: "Jane, S.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
  },
  {
    name: "Jane, S.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.",
  },
  {
    name: "Jane, S.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
  },
];

const Testimonials = () => {
  const [activeReview, setActiveReview] = useState(0);

  const handlePrev = () => {
    setActiveReview((current) =>
      current === 0 ? reviews.length - 1 : current - 1,
    );
  };

  const handleNext = () => {
    setActiveReview((current) =>
      current === reviews.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h2 className={styles.title}>What are our fans saying?</h2>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat. Fusce non nibh luctus.
        </p>
      </div>

      <div className={styles.desktopGallery}>
        <Image
          className={styles.desktopGalleryImage}
          src="/images/Group_4522.jpg"
          alt="Our customers"
          width={1400}
          height={250}
        />
      </div>

      <div className={styles.mobileGallery}>
        <Image
          className={styles.mobileGalleryImage}
          src="/images/Component_17.png"
          alt="Our customers"
          width={600}
          height={300}
        />
      </div>

      <div className={`container ${styles.reviewsContainer}`}>
        <div className={styles.reviewsWrapper}>
          <button
            className={`${styles.arrowButton} ${styles.prev}`}
            type="button"
            onClick={handlePrev}
            aria-label="Previous review"
          >
            ‹
          </button>

          <div className={styles.reviews}>
            {reviews.map((review, index) => (
              <article
                className={`${styles.review} ${
                  index === activeReview ? styles.activeReview : ""
                }`}
                key={`${review.name}-${index}`}
              >
                <div className={styles.reviewHeader}>
                  <span className={styles.avatar} />

                  <div>
                    <div className={styles.stars}>★★★★★</div>
                    <p className={styles.name}>{review.name}</p>
                  </div>
                </div>

                <p className={styles.reviewText}>{review.text}</p>
              </article>
            ))}
          </div>

          <button
            className={`${styles.arrowButton} ${styles.next}`}
            type="button"
            onClick={handleNext}
            aria-label="Next review"
          >
            ›
          </button>
        </div>

        <div className={styles.dots}>
          {reviews.map((_, index) => (
            <button
              className={`${styles.dot} ${
                activeReview === index ? styles.activeDot : ""
              }`}
              type="button"
              key={index}
              onClick={() => setActiveReview(index)}
              aria-label={`Show review ${index + 1}`}
            />
          ))}
        </div>

        <button className={styles.cta} type="button">
          <span>Customize Your Outfit</span>
          <span className={styles.ctaArrow}>→</span>
        </button>

        <div className={styles.rating}>
          <span className={styles.ratingStars}>★★★★★</span>

          <span className={styles.ratingText}>
            Over 500+ 5 Star Reviews Online
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
