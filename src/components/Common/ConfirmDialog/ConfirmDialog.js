import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const ConfirmDialog = ({
    show,
    onClose,
    onConfirm
}) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Are you sure you want to perform that operation?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose} >Close</Button>
                <Button variant="primary" onClick={onConfirm} >Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDialog;