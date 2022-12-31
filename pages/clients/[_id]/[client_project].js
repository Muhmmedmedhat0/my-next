import React from "react";
import { useRouter } from "next/router";

function SelectedClintProjectPage() {
  const router = useRouter();
  const {_id, client_project} = router.query;

  return (
    <div>
      <h1>SelectedClintProjectPage {_id} / {client_project}</h1>
    </div>
  );
}

export default SelectedClintProjectPage;
