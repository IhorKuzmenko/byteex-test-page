'use client';

import Image from 'next/image';
import { useState } from 'react';

import styles from './FAQ.module.css';

const questions = [
  {
    question: 'lorem ipsum dolor sit amet',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    question: 'lorem ipsum dolor sit amet',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    question: 'lorem ipsum dolor sit amet',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    question: 'lorem ipsum dolor sit amet',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    question: 'lorem ipsum dolor sit amet',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    question: 'lorem ipsum dolor sit amet',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
];

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(0);

  const handleQuestion = (index: number) => {
    setActiveQuestion(current => (current === index ? null : index));
  };

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.faq}>
          <h2 className={styles.title}>Frequently asked questions.</h2>

          <div className={styles.questions}>
            {questions.map((item, index) => {
              const isOpen = activeQuestion === index;

              return (
                <div className={styles.question} key={index}>
                  <button
                    className={styles.questionButton}
                    type="button"
                    onClick={() => handleQuestion(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>

                    <span className={styles.symbol}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className={styles.answer}>
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src="/images/Component_5.png"
            alt="Women wearing comfortable loungewear"
            width={400}
            height={500}
          />
        </div>

        <div className={styles.mobileBottom}>
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
      </div>
    </section>
  );
};

export default FAQ;