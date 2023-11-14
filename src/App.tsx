import Toolbar from './components/Toolbar/Toolbar';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';
import {useState} from 'react';
import {Alerts} from './types';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [alerts, setAlerts] = useState<Alerts[]>([
    { id: 1, show: true },
    { id: 2, show: true },
    { id: 3, show: true },
    { id: 4, show: true },
  ]);

  const closeAlert = (id: number) => {
    setAlerts((prevAlerts) =>
      prevAlerts.map((alert) =>
        alert.id === id ? { ...alert, show: false } : alert
      )
    );
  };
  const toggleAlertVisibility = () => {
    setShowAlert((prevState) => !prevState);
  };

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
                  onClick={() => toggleAlertVisibility()}>Show alert
          </button>
          {showAlert &&(
            <>
              <Alert
                id={alerts[0].id}
                type="alert-primary"
                onDismiss={closeAlert}
                alert={alerts[0].show}>This is a primary alert </Alert>
              <Alert
                id={alerts[1].id}
                type="alert-success"
                onDismiss={closeAlert}
                alert={alerts[1].show}>This is a success alert</Alert>
              <Alert
                id={alerts[2].id}
                type="alert-warning"
                onDismiss={closeAlert}
                alert={alerts[3].show}>This is a warning alert</Alert>
              <Alert
                id={alerts[3].id}
                type="alert-danger"
                // onDismiss={closeAlert}
                alert={alerts[3].show}>This is a danger alert</Alert>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;