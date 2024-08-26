import { Outlet } from "react-router-dom";
import Header from "../ui/home/Header";


const MainLayout = () => {
//   const cart = useAppSelector((state) => state.cart.items);
//   const shouldWarn = cart.length > 0;

//   usePageLeaveWarning(shouldWarn);
  return (
    <div>
      <Header/>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default MainLayout;