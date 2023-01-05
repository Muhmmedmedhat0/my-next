import React, { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage() {
  const [sales, setSales] = useState();
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

  if (error) return <div className="center ">failed to load</div>;
  if (!data || !sales || isLoading)
    return <div className="center">loading...</div>;

  // console.log(sales );
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

export default LastSalesPage;
