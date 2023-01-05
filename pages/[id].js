import React from "react";
import fs from "fs/promises";
import path from "path";

function ProductDetailPage(props) {
  const { product } = props;

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.id;

  const data = await getData();
  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product,
    },
  };
}
/**
 * asynchronous, optional function that takes a page path and returns an array of possible paths
 * to pre-render based on that page. It is used to optimize performance
 * by pre-rendering all possible dynamic routes for a given page at build time.
 * This can enable faster navigation for users visiting the page
 * since the browser does not need to wait for
 * additional server requests for parameters associated with each route
 */
export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { id: id } }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths: pathsWithParams,
    fallback: false,
  };
}

export default ProductDetailPage;
