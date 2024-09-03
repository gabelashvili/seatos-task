import { useState } from "react";
import "./App.css";
import { notificationsList } from "./helpers";
import { useToast } from "./hooks/useToast";
import Modal from "./components/modal/modal";

function App() {
  const toast = useToast();
  const [showModal, setShowModal] = useState(false)

  const showNotifications = () => {
    notificationsList.forEach((el) => {
      toast(el);
    });
  };

  return (
    <div className="App">
      <button onClick={showNotifications}>Show notifications</button>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal open={showModal} closeModal={() => setShowModal(false)} title="Warning Modal" size="default" footerActions={[
        {
          label: 'Close',
          onClick: () => setShowModal(false)
        },
        {
          label: 'Accept',
          onClick: () => setShowModal(false)
        }
      ]}>
        <div>
          Here goes some content
        </div>
      </Modal>
    </div>
  );
}

export default App;
