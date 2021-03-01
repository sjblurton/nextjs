import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const Home = () => (
  <React.Fragment>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
        impedit suscipit architecto, odio inventore nostrum non neque dicta.
        Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem
        nobis odit.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
        impedit suscipit architecto, odio inventore nostrum non neque dicta.
        Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem
        nobis odit.
      </p>
      <Link href="/ninjas/">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  </React.Fragment>
);

export default Home;
