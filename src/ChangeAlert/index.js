import React from "react";

import { useStorageListener } from "./useStorageListener";
import { Modal } from "../Modal";
import "./alert.css";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <Modal>
        <div className="alert-modal">
          <p>¿Hubo cambios?</p>
          <button className="button-alert" onClick={toggleShow}>
            Recargar
          </button>
        </div>
      </Modal>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
