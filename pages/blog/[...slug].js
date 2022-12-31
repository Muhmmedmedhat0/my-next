import React from "react";
import { useRouter } from "next/router";

// catch all router page in nextjs goes like this [...anynamed].js
function BlogPostsPage() {
  const router = useRouter();
  
  return (
    <div>
      <h1>BlogPostsPage</h1>
    </div>
  );
}

export default BlogPostsPage;
