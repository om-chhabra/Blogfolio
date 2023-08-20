import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal";
import Login from "../components/Login";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
function Root() {
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
      <Outlet context={[postModalVisible, setPostModalVisible]} />
      <Footer usePath={usePathname} />
    </>
  );
}
export default Root;
