import { Button, Form } from 'react-bootstrap'
import './ContactForm.css'

export function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="contactForm"
    >
      <input type="hidden" name="form-name" value="contact" />
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control id="name" type="text" name="name" required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control id="email" type="email" name="email" required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="message">Message</Form.Label>
        <Form.Control
          id="message"
          name="message"
          as="textarea"
          rows={4}
          required
        />
      </Form.Group>

      <Button type="submit" variant="primary">
        Send Message
      </Button>
    </form>
  )
}
