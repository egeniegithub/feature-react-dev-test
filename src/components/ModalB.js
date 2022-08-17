import React from 'react'
import { Modal, Form,  InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';


function ModalB(props) {
  return (
    <div> <Modal
    show={props.show}
    cancel={props.close}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">US Contacts</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      
      <InputGroup className="mb-3">
        
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
         <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
      </InputGroup>
      <h4>List will show here</h4>
    </Modal.Body>
    <Modal.Footer className='justify-content-start'>
       
      <Button style={{background: "#fff", border: '1px solid #46139f', color: '#000'}} onClick={props.close}>Close</Button>
      <Button style={{background: "#46139f", border: 'none'}} onClick={props.openA}>Modal A</Button>
      
    </Modal.Footer>
  </Modal>
  </div>
  )
}

export default ModalB