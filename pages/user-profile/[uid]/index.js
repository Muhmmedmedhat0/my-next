import React from "react";

function UserInfoPage(props) {
  return (
    <>
      <h1>{props.id}</h1>
    </>
  );
}

export default UserInfoPage;
export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.uid;
  return {
    props: {
      id: 'userId - ' + userId,
    },
  };
}
