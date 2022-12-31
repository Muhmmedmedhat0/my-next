import React from "react";
import { useRouter } from "next/router";

function SingleClintPage() {
  const router = useRouter();
  const _id = router.query._id;

  function loadProjectHandler() {
    // load data ....
    // this is alternative way to using this string "/clients/1/any"
    router.push({
      pathname: "/clients/[_id]/[client_project]",
      query: { _id: "1", client_project: "any" },
    });
  }
  return (
    <div>
      <h1>SingleClintPage number {_id}</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default SingleClintPage;
