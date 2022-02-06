import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const ErrorNotification = () => ({
    show,
    errMessage
}) => {

    return (
        <Modal
            size="sm"
            show={show}
            aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Error Occurred
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{errMessage}</Modal.Body>
        </Modal>
    );
};

export default ErrorNotification;