// import Footer from "../components/Footer";

import Header from "components/Header/Header";
import Sidebar from "components/Sidebar1/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen overflow-hidden">
        <div className="flex md:justify-center bg-[#1C212D] overflow-x-auto">
          <Sidebar />
        </div>
        <div className="flex-1 flex  flex-col px-[6px] py-[10px] bg-[#f3f6f9] overflow-hidden gap-8">
          <main
            className="flex-1 overflow-y-auto overflow-x-hidden"
            style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
          >
            <div className="mb-[16px]">
              <Header />
            </div>
            {children}
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default Layout;
