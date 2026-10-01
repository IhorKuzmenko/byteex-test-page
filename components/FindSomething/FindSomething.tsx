import Image from 'next/image';

import styles from './FindSomething.module.css';

const FindSomething = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Find something you love.</h2>

          <p className={styles.desktopDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat.
          </p>

          <p className={styles.mobileDescription}>
            Click below to browse our collection!
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src="/images/Group_6037.png"
            alt="Women wearing comfortable loungewear"
            width={700}
            height={400}
          />
        </div>

        <div className={styles.actions}>
          <button className={styles.cta} type="button">
            <span>Customize Your Outfit</span>
            <span className={styles.ctaArrow}>→</span>
          </button>

          <div className={styles.desktopPayment}>
            <span className={styles.shippingText}>◷ Ships in 1-2 Days</span>

            <Image
              className={styles.paymentImage}
              src="/images/Screenshot.png"
              alt="Available payment methods"
              width={290}
              height={30}
            />
          </div>

          <div className={styles.mobileRating}>
            <span className={styles.stars}>★★★★★</span>

            <span className={styles.ratingText}>
              Over 500+ 5 Star Reviews Online
            </span>
          </div>
        </div>

        <div className={styles.desktopBenefits}>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>
              <svg className={styles.benefitSvg} aria-hidden="true">
                <use href="/icons/sprite.svg#Group4402" />
              </svg>
            </span>

            <span className={styles.benefitText}>
              FREE Shipping on
              <br />
              Orders over $200
            </span>
          </div>

          <span className={styles.separator} />

          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>
              <svg className={styles.benefitSvg} aria-hidden="true">
                <use href="/icons/sprite.svg#Group2" />
              </svg>
            </span>

            <span className={styles.benefitText}>
              Over 500+ 5 Star
              <br />
              Reviews Online
            </span>
          </div>

          <span className={styles.separator} />

          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>
              <svg className={styles.benefitSvg} aria-hidden="true">
                <use href="/icons/sprite.svg#Vector" />
              </svg>
            </span>

            <span className={styles.benefitText}>
              Made ethically
              <br />
              and responsibly.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindSomething;