import React, { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://nextjs-test-18425-default-rtdb.firebaseio.com/sales.json",
    fetcher,
  );

  useEffect(() => {
    if (data) {
      const transformedData = [];
      for (const key in data) {
        transformedData.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedData);
    }
  }, [data]);

  if (isLoading) return <div className="center">loading...</div>;
  if (error || !data || !sales) return <div className="center ">failed to load</div>;
  return (
    <ul>
      <li>
        <h1>Hi</h1>
      </li>
      {sales.map((item) => (
        <li key={item.id}>
          {item.username} --- {item.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://nextjs-test-18425-default-rtdb.firebaseio.com/sales.json",
  );
  const data = await response.json();
  const transformedData = [];

  for (const key in data) {
    transformedData.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: { sales: transformedData },
    revalidate: 10,
  };
}

export default LastSalesPage;
