import { useLocation } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal";
import Login from "../components/Login";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
function ErrorPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [postModalVisible, setPostModalVisible] = useState(false);

  function modalHandler() {
    setModalVisible(!modalVisible);
  }
  function postModalHandler() {
    setPostModalVisible(!postModalVisible);
  }
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };

  return (
    <>
      {modalVisible && (
        <Modal onClose={modalHandler}>
          <Login onLogin={modalHandler}></Login>
        </Modal>
      )}
      <MainNavigation
        usePath={usePathname}
        onPost={postModalHandler}
        onOpen={modalHandler}
      ></MainNavigation>
      <main>
        <div className="text-center md:p-48 sm:p-40 py-40">
          <h1 className="font-bold sm:text-3xl text-2xl">404 Not Found 🙁</h1>
          <h2 className="font-medium text-xl md:text-lg">
            This is not the page you are looking for.
          </h2>
        </div>
      </main>
      <Footer usePath={usePathname} />
    </>
  );
}
export default ErrorPage;
