import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      {/* <div className="container mx-auto"> */}
      <Outlet />
      {/* </div> */}
    </div>
  );
};
