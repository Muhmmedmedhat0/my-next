import React from "react";
import fs from "fs/promises";
import path from "path";

import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home(props) {
  const { products } = props;
  return (
    <>
      <h1 className="center">Hello next</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/${product.id}`}>
              {product.id} - {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export async function getStaticProps(context) {
  console.log("Re-Generating...");
  // start in the over all directory or the root directory
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    // redirect if there is no data
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    // return 404 page
    return { notFound: true };
  }
  return {
    props: {
      products: data.products,
    },
    // incremental static props
    // regenerate the site on the production every specified number of seconds to have the latest data updated
    revalidate: 60,
  };
}
