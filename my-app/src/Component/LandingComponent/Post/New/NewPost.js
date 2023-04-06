import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../../Images/icon.svg'
import camera from '../../../../Images/camera.png'
import './NewPost.css'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Header from '../Header/Header.js';
export default function NewPost() {
  const [formData, setFormData] = useState({
    image: null,
    author: ""
  })
  function CaptureForm(event) {
      event.preventDefault()
      const formValues = new FormData(event.target)
  }
  return (
    <div>
      <Header />
      <div className='new-post-container'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Form onSubmit={CaptureForm}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control name='Image' type="file" />
              </Form.Group>
              <InputGroup className="mb-3">

                <Form.Control aria-label="Author" name="author" placeholder='Enter Name' />
                <Form.Control aria-label="Location" name='location' placeholder='Enter Location' />
              </InputGroup>
              <Form.Control size="lg" type="text" name='description' placeholder="Description" />
              <div className='btn-container'>
                <Button variant="primary" className="" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>


  )
}