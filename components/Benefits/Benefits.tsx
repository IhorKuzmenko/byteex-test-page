"use client";

import Image from "next/image";
import { useState } from "react";

import styles from "./Benefits.module.css";

const benefits = [
  {
    icon: "Group4467",
    title: "Ethically sourced.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    icon: "Vector1",
    title: "Responsibly made.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    icon: "Group4467",
    title: "Made for living in.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    icon: "Vector",
    title: "Unimaginably comfortable.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
];

const mainImage = "/images/image_22.jpg";

const secondaryImage =
  "/images/Lucille-crewneck-sweatshirt-blush-and ayla-sleep-jogger-sepia-rose-2.png";

const gallery = [
  secondaryImage,
  mainImage,
  secondaryImage,
  secondaryImage,
  secondaryImage,
  secondaryImage,
  secondaryImage,
  secondaryImage,
];

const BenefitsSection = () => {
  // В макете второе превью активно.
  const [activeImage, setActiveImage] = useState(1);

  const handlePrev = () => {
    setActiveImage((current) =>
      current === 0 ? gallery.length - 1 : current - 1,
    );
  };

  const handleNext = () => {
    setActiveImage((current) =>
      current === gallery.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Loungewear you can be proud of.</h2>

          <ul className={styles.benefits}>
            {benefits.map((benefit) => (
              <li className={styles.benefit} key={benefit.title}>
                <span className={styles.iconWrapper}>
                  <svg className={styles.icon} aria-hidden="true">
                    <use href={`/icons/sprite.svg#${benefit.icon}`} />
                  </svg>
                </span>

                <div className={styles.benefitContent}>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>

                  <p className={styles.benefitText}>{benefit.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.gallery}>
          <div className={styles.galleryMain}>
            <button
              className={`${styles.arrowButton} ${styles.prev}`}
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              ‹
            </button>

            <div className={styles.imageWrapper}>
              <Image
                className={styles.mainImage}
                src={gallery[activeImage]}
                alt="Woman wearing Byteex loungewear"
                width={360}
                height={540}
                sizes="(max-width: 767px) 210px, 360px"
                priority
              />

              <div className={styles.thumbnails}>
                {gallery.map((src, index) => (
                  <button
                    className={`${styles.thumbnail} ${
                      activeImage === index ? styles.activeThumbnail : ""
                    }`}
                    type="button"
                    key={`${src}-${index}`}
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show gallery image ${index + 1}`}
                    aria-current={activeImage === index ? "true" : undefined}
                  >
                    <Image src={src} alt="" width={28} height={36} />
                  </button>
                ))}
              </div>
            </div>

            <button
              className={`${styles.arrowButton} ${styles.next}`}
              type="button"
              onClick={handleNext}
              aria-label="Next image"
            >
              ›
            </button>
          </div>

          <p className={styles.caption}>White Robe</p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
