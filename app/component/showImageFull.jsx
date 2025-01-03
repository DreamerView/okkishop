import React from 'react';
import { Modal } from 'react-bootstrap';
import Image from 'next/image';

const ShowImageFull = ({ showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton />
      <Modal.Body>
        <Image className="w-100 h-auto rounded-5" width={300} height={300} src="/placeholder.jpg" alt="" />
      </Modal.Body>
    </Modal>
  );
};

export default ShowImageFull;
