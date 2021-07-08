import { Modal, Button } from "react-bootstrap";

function ModalCard(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.head}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.title}</h4>
                <h5>{props.subtitle}</h5>
                <p>{props.age}</p>
                <label>
                    <p>
                        {props.text}
                    </p>
                    <p>{props.seemore}</p>
                </label>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="outline-primary" className="btn-home-1" size="lg">Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalCard;