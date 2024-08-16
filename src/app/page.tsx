import styles from "./css/page.module.scss";
import CardComponent from "./components/card";
import { cards } from "./lib/cards";

const Home: React.FC = () => (
  <>
    <main className={styles.main}>
      <div className={styles.title}>
        <h1>
          Reliable, efficient delivery
          <br />
          <span>Powered by Technology</span>
        </h1>
        <p className={styles.description}>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>

      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <CardComponent
            key={card.id}
            id={card.id}
            name={card.name}
            description={card.description}
            icon={card.icon}
            iconAlt={card.iconAlt}
            color={card.color}
          />
        ))}
      </div>
    </main>
    {/* <div role="contentinfo" className={styles.attributionWrapper}>
      <div className={styles.attribution}>
        Challenge by{" "}
        <a
          className="text-blue"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="text-blue" href="https://github.com/chelsea-here">
          Chelsea Anne Livingston Cruz
        </a>
        .
      </div>
    </div> */}
  </>
);

export default Home;
