import Link from "next/link";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div>
      <div className={`${styles.div1} ${styles.div}`}>
        <h1 className={styles.heading}>
          Issue your own NFT with a few simple inputs and a click.
        </h1>
        <Link href={{ pathname: "/mint" }} className={styles.link}>
          Deploy NFT
        </Link>
      </div>

      <div className={`${styles.div2} ${styles.div}`}>
        <h1 className={styles.heading}>Issue your own ERC20 token.</h1>
        <Link href={{ pathname: "/mint" }} className={styles.link}>
          Deploy ERC20
        </Link>
      </div>

      <div className={`${styles.div3} ${styles.div}`}>
        <h1 className={styles.heading}>
          Move your ERC20 tokens to a different network.
        </h1>
        <Link href={{ pathname: "/" }} className={styles.link}>
          Bridge ERC20
        </Link>
      </div>

      <div className={`${styles.div4} ${styles.div}`}>
        <h1 className={styles.heading}>
          Exchange your ERC20 tokens with other tokens.
        </h1>
        <Link href={{ pathname: "/" }} className={styles.link}>
          Swap ERC20
        </Link>
      </div>

      <div className={`${styles.div5} ${styles.div}`}>
        <h1 className={styles.heading}>Buy and sell NFTs.</h1>
        <Link href={{ pathname: "/" }} className={styles.link}>
          Market Place
        </Link>
      </div>
    </div>
  );
};

export default Home;
