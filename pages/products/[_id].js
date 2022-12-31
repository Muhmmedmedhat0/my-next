import React from "react";
import { useRouter } from "next/router";

function SingleProduct() {
  const router = useRouter();
  const _id = router.query._id;
  // console.log(router);
  return (
    <div>
      <h1>Hi this is single product number {_id}</h1>
    </div>
  );
}

export default SingleProduct;
