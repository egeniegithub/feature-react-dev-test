import React from 'react';
import Button from 'react-bootstrap/Button';
import ModalA from './components/ModalA';
import ModalB from './components/ModalB';

export default function Home() {

    const [modalShow, setModalShow] = React.useState(false);
    const [modalBShow, setModalBShow] = React.useState(false);

  return (
    <div className='container homepage'>
        <div className='d-flex align-items-center justify-content-center h-100'>
        <Button style={{background: "#46139f", border: 'none'}} variant="primary" onClick={() => setModalShow(true)}>
            Button A
        </Button>
        <Button style={{background: "#ff7f50", border: 'none'}} variant="primary" onClick={() => setModalBShow(true)}>
            Button B
        </Button>

     
      <ModalA
      show={modalShow}
      openB={()=> {
        setModalShow(false)
        setModalBShow(true)
        }}
      close={() => setModalShow(false)}
      
      />
      <ModalB
      show={modalBShow}
      openA={()=> {
        setModalBShow(false)
        setModalShow(true)
      } }
      close={() => setModalBShow(false)}
      />
        </div>
         
    </div>
  )
}
