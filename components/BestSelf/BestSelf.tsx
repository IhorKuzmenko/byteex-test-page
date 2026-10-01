import Image from 'next/image';

import styles from './BestSelf.module.css';

const BestSelf = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Be your best self.</h2>

        <div className={styles.collage}>
          <Image
            className={styles.collageImage}
            src="/images/Group_6036.png"
            alt="Women wearing loungewear"
            width={390}
            height={500}
          />
        </div>

        <div className={styles.content}>
          <p>
            Hi! My name&apos;s [Insert Name], and I founded [Insert] in ______.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat.
          </p>

          <p>
            Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
            placerat volutpat ligula, ac consectetur felis varius non. Aliquam a
            nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu
            congue, faucibus libero nec, placerat ligula.
          </p>

          <p>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
          </p>

          <p>
            Fusce non ante velit. Sed auctor odio eu semper molestie. Nam
            mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus,
            ac convallis urna massa at nibh.
          </p>

          <p>
            Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod
            leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in
            sapien.
          </p>

          <p>Cras mattis varius mollis.</p>

          <button className={styles.button} type="button">
            Customize Your Outfit
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSelf;