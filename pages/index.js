import React from "react";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <ul>
          <li>
            <Link href="/">Home</Link>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog/1">Blog/1</Link></li>
              <li>
                <Link href="/products">Products</Link>
                  <ul>
                    <li><Link href="/products/1">products/1</Link></li>
                  </ul>
                  <ul>
                    <li><Link href="/products/list">products/list</Link></li>
                  </ul>
              </li>
              <li><Link href="/clients">Clients</Link>
              <ul>
              <li>
                <Link href={`/clients/1`}>clients/:id</Link>
                <ul>
                  <li>
                    <Link href="/clients/1/2">clients/:id/singleClintProject</Link>
                  </li>
                </ul>
              </li>
            </ul>
              </li>
            </ul>
          </li>
        </ul>
      </main>
    </>
  );
}
