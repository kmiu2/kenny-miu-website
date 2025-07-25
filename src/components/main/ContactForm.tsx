import { Button, Form } from 'react-bootstrap'

export function ContactForm() {
  return (
    <form name="contact" method="POST" data-netlify="true" className="contactForm">
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={4} name="message" required />
      </Form.Group>

      <Button type="submit" variant="primary">
        Send Message
      </Button>
    </form>
  )
}
