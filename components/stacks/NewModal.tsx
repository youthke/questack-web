import React, { useState } from "react"
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import NewStackForm from "./Form";

const NewStackModal: React.FC<{}> = () => {
  const [isModalAppearance, setIsModalAppearance] = useState(false);
  const modalToggle = () => setIsModalAppearance(!isModalAppearance)
  return (
    <>
    <Button onClick={modalToggle}>
      New
    </Button>
    <Modal isOpen={isModalAppearance} toggle={modalToggle}>
      <ModalHeader>
        Create New Stack
      </ModalHeader>
        <ModalBody>
          <NewStackForm/>
        </ModalBody>
    </Modal>
    </>
  );
}

export default NewStackModal