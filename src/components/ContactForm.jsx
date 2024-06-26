import  { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const [errors, setErrors] = useState({
      name: '',
      email: '',
      message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
      };
    
      const validateField = (fieldName, value) => {
        let errorMessage = '';
    
        switch (fieldName) {
          case 'name':
            errorMessage = value.trim() ? '' : 'Name is required';
            break;
          case 'email':
            errorMessage = value.trim() ? (isValidEmail(value) ? '' : 'Invalid email address') : 'Email is required';
            break;
          case 'message':
            errorMessage = value.trim() ? '' : 'Message is required';
            break;
          default:
            break;
        }
    
        setErrors({ ...errors, [fieldName]: errorMessage });
      };
    
      const isValidEmail = (email) => {
        // Basic email validation using regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validate all fields before submission
        const newErrors = { ...errors };
        Object.keys(formData).forEach(fieldName => validateField(fieldName, formData[fieldName]));
        setErrors(newErrors);
    
        // Check if there are any errors
        if (Object.values(newErrors).every(error => !error)) {
          // Form submission logic (e.g., send data to backend)
          console.log('Form submitted:', formData);
          alert('Thanks for contacting me!')
          // Clear form fields after submission
          setFormData({ name: '', email: '', message: '' });
        }
      };
    
      return (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <br></br><br></br>
    
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
    
          <br></br><br></br>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              isInvalid={!!errors.message}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
          </Form.Group>
          <br></br>
        <br></br>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br></br>
          <br></br>
        </Form>
      );
    };
    
    export default ContactForm;