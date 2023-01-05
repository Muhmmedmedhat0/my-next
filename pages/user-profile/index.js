import React from "react";

function UserProfilePage(props) {
  const { name } = props;
  return (
    <>
      <h1 className="center">{name}</h1>
    </>
  );
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  // important for accsess headers and cookies like add autintication
  // or we have highly dynamic data changed multiple times
  const { params, req, res } = context;
  console.log(res);
  return {
    props: { name: "max" },
  };
}
