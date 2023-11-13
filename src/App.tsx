import Toolbar from './components/Toolbar/Toolbar';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';
import React, {useState} from 'react';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);


  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="container-fluid">
        <div className="text-center">
          <button className="btn btn-primary mt-5 w-25" onClick={() => setShowModal(true)}>Show modal window
          </button>
        </div>
        <Modal show={showModal} title="Demonstration modal windows" onClose={() => setShowModal(false)}>
          <div className="modal-body">
            <p>We retain information relating to the Services until it is no longer necessary to serve the
              purposes for which it was collected,
              such as to provide the Services to you or improve the Services.
              Reasons we may retain some information for longer periods include:
            </p>
          </div>
        </Modal>
        <div className="text-center d-flex justify-content-center align-items-center flex-column">
          <button className="btn btn-info mt-3 w-25"
                  onClick={() => setShowAlert(true)}>Show alert
          </button>
          <Alert
            type="alert-primary"
            alert={showAlert}>This is a primary alert </Alert>
          <Alert
            type="alert-success"
            alert={showAlert}>This is a success alert</Alert>
          <Alert
            type="alert-warning"
            alert={showAlert}>This is a warning alert</Alert>
          <Alert
            type="alert-danger"
            alert={showAlert}>This is a danger alert</Alert>
        </div>
      </main>
    </>
  );
}

export default App;
