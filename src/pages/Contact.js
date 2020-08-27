import React from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import DocumentMeta from "react-document-meta";

class Contact extends React.Component {
	render() {
		const _pathname = window.location.pathname;
		const meta = {
			title: process.env.REACT_APP_NAME + " | Contacto",
			description: 'Esta es la descripción de la página de contacto',
			canonical: process.env.REACT_APP_URL + _pathname,
			meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
		};
		return (
			<DocumentMeta {...meta}>
			  <section className="container-custom py-3 py-md-5">
			    <Row className="justify-content-center">
			      <Col md="6">
			        <h1 className="font-weigh-bold mb-3 mb-md-4">Contact Page</h1>

			        <Form method="POST" action="contact-sender">
			        	<Form.Group>
			        		<Form.Label>* Nombre</Form.Label>
			        		<Form.Control type="text" required></Form.Control>
			        	</Form.Group>

			        	<Form.Group>
			        		<Form.Label>* Correo</Form.Label>
			        		<Form.Control type="email" required></Form.Control>
			        	</Form.Group>

			        	<Form.Group>
			        		<Form.Label>* Asunto</Form.Label>
			        		<Form.Control type="text" required></Form.Control>
			        	</Form.Group>

			        	<Form.Group>
			        		<Form.Label>* Mensaje</Form.Label>
			        		<Form.Control as="textarea" required></Form.Control>
			        	</Form.Group>

			        	<Form.Group className="form-row justify-content-end">
			        		<Col md="6">
			        			<Button variant="primary" type="submit" className="btn-block rounded-0">Enviar</Button>
			        		</Col>
			        	</Form.Group>
			        </Form>
			      </Col>
			    </Row>
			  </section>
			</DocumentMeta>
		);
	}
}

export default Contact;