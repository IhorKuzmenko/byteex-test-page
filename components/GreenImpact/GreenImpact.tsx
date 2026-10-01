import styles from "./GreenImpact.module.css";

const impactItems = [
  {
    icon: "Group",
    value: "3,927 kg",
    text: "of CO2 saved",
  },
  {
    icon: "Group1",
    value: "2,546,167 days",
    text: "of drinking water saved",
  },
  {
    icon: "Vector4",
    value: "7,321 kWh",
    text: "of energy saved",
  },
];

const GreenImpact = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Our total green impact</h2>

        <ul className={styles.list}>
          {impactItems.map((item) => (
            <li className={styles.item} key={item.value}>
              <span className={styles.iconWrapper}>
                <svg className={styles.icon} aria-hidden="true">
                  <use href={`/icons/sprite.svg#${item.icon}`} />
                </svg>
              </span>

              <strong className={styles.value}>{item.value}</strong>

              <span className={styles.text}>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GreenImpact;
