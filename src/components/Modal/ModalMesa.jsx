import {useState} from 'react'
import {Modal, Button, Form, FormGroup} from 'react-bootstrap'

const ModalMesa = ({show, handleClose, handleSave}) => {
    const [mesa, setMesa] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault();
        handleSave(mesa);
        handleClose();
    }

return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ingrese el número de mesa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <FormGroup controlId='formMesa'>
                <Form.Label>Numero de mesa</Form.Label>
                <Form.Control
                type='number'
                required
                placeholder='Ingrese su numero de mesa'
                value={mesa}
                onChange={(e) => setMesa(e.target.value)}
                className='text-dark'
                />
            </FormGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
Cerrar
        </Button>
        <Button variant='primary' onClick={handleSubmit}>Guardar</Button>
      </Modal.Footer>
      </Modal>

)

}


export default ModalMesa