import { Outlet } from "react-router-dom";
import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer";

const RootView = () => {
  return (
    <>
      <Header />
      <main className="my-3 flex-grow-1 p-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default RootView;
