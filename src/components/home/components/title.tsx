import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../common/store/slices/model";

const TitleHome = () => {
  const { isAuth } = useSelector((state: RootState) => {
    return state.auth;
  });

  console.log(isAuth);

  return (
    <div>
      {isAuth ? <h2>Authenticated!</h2> : <h2>UnAuthenticated</h2>}
      <button>Login</button>
    </div>
  );
};

export default TitleHome;
