import React from 'react'

import { Modal, Form,  InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import axios from "axios";

function ModalA(props) {
    //console.log("props",props)

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE3MSwiZXhwIjoxNjM5NDY2NjE1fQ.9vE-glLQtV2NT3gNMkqeRkrWWZAhYCqX-_ibs7lC8GY'
    React.useEffect(() => {
        // axios({
  
        //     // Endpoint to send files
        //     url: "https://api.dev.pastorsline.com/api/contacts.json",
        //     method: "POST",
        //     headers: {
        //         'Authorization': `Bearer ${token}` 
        //       }
        
        //     // Attaching the form data
           
        //   })
        
        //     // Handle the response from backend here
        //     .then((res) => {

        //         console.log("response", res)
        //      })
        
        //     // Catch errors if any
        //     .catch((err) => { console.log("errors", err)});


        axios.get('https://api.dev.pastorsline.com/api/contacts.json', {
  headers: {
    
    "Access-Control-Allow-Origin" : "*",
            "Content-type": "Application/json",
            "Authorization": `Bearer ${token}`
  }
})
.then((res) => {
  console.log(res)
})
.catch((error) => {
  console.error(error)
})
        
      }, []);

      
  return (
    <div> <Modal
    show={ props.show}
    cancel={props.close}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">All Contacts</Modal.Title>
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

    <Button style={{background: "#ff7f50", border: 'none'}} onClick={props.openB} data-dismiss="modal">Modal B</Button>
     
    
      
    </Modal.Footer>
  </Modal>
  </div>
  )
}

export default ModalA