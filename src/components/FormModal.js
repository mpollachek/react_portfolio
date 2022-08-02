
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const FormModal = ({form, modalButton}) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>{modalButton}</Button>
      <Modal isOpen={modal} toggle={toggle} size='lg'>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          {form}
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
}

export default FormModal;