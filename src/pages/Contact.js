import React, { useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import DocumentMeta from "react-document-meta";
import $ from "jquery";
// import ScriptTag from 'react-script-tag';
import { loadReCaptcha } from 'react-recaptcha-v3'
import { useForm as UseForm } from "react-hook-form";
/*Yup Resolver*/
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";

/* Form validations */
const schema = yup.object().shape({
  name: yup.string()
  					.min(3, "Debe tener 3 caracteres como mínimo")
  					.max(255, "Debe tener 255 caracteres como máximo")
  					.required("El campo es obligatorio"),
  email: yup.string()
  					.email("Introduce ser un correo válido")
  					.min(3, "Debe tener 3 caracteres como mínimo")
  					.max(500, "Debe tener 500 caracteres como máximo")
  					.required("El campo es obligatorio"),
  subject: yup.string()
  					.min(3, "Debe tener 3 caracteres como mínimo")
  					.max(255, "Debe tener 255 caracteres como máximo")
  					.required("El campo es obligatorio"),
  message: yup.string()
  					.min(20, "Debe tener 20 caracteres como mínimo")
  					.max(255, "Debe tener 255 caracteres como máximo")
  					.required("El campo es obligatorio"),
});

/* Usamos funciones en nuestro componente para poder usar el hook "UseForm" */
export default function Contact() {
	/* La función useEffect(()=>{}) es equivalente a componentDidMount() en Class Component ;) */
	useEffect(()=>{
		loadReCaptcha(process.env.REACT_APP_GRPUBPLIC, () => {});
	})
	function executeRecaptcha() {
		window.grecaptcha.ready(() => {
			window.grecaptcha
				.execute( process.env.REACT_APP_GRPUBPLIC, {action: "get_in_touch"} )
				.then((token) => {
					$(".recaptcha-added").remove();
			    $('form#contact-form').prepend('<input class="recaptcha-added" type="hidden" name="g-recaptcha-response" value="' + token + '">');
			    $('form#contact-form').prepend('<input class="recaptcha-added" type="hidden" name="action" value="get_in_touch">');
				});
		});
	}
	function onSubmit(data) { console.log(data); }

	const { register, handleSubmit, errors } = UseForm({
		resolver: yupResolver(schema)
	});
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

		        <Form method="POST" id="contact-form" action="contact-sender" onSubmit={handleSubmit(onSubmit)}>
		        	<Form.Group className={ errors.name && "has-error" }>
		        		<Form.Label>* Nombre</Form.Label>
		        		<Form.Control ref={register({ required: true, minLength: 3, maxLength:255 })} name="name" type="text"></Form.Control>
		        		{/*
		        			SI el campo tiene más de una validación, entonces se debe usar algo como: errors.field_name?.type === "required|pattern|min|mx|minLenth|maxLength" && "Error a mostrar".
		        			Esto para que se pueda renderizar el error de cada validación.
		        			De lo contrario sólo bastará con poner errors.field_name === "validacion aqui" && "error a mostrar"
		        		*/}
		        		{ errors.name?.message && <p className="d-block text-danger font-small">{ errors.name?.message }</p> }
		        	</Form.Group>

		        	<Form.Group className={ errors.email && "has-error" }>
		        		<Form.Label>* Correo</Form.Label>
		        		<Form.Control ref={register({ required: true, pattern: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, minLength: 3, maxLength:500 })} name="email" type="email"></Form.Control>
		        		{ errors.email?.message && <p className="d-block text-danger font-small">{ errors.email?.message }</p> }
		        	</Form.Group>

		        	<Form.Group className={ errors.subject && "has-error" }>
		        		<Form.Label>* Asunto</Form.Label>
		        		<Form.Control ref={register({ required: true, minLength: 3, maxLength:255 })} name="subject" type="text"></Form.Control>
		        		{ errors.subject?.message && <p className="d-block text-danger font-small">{ errors.subject?.message }</p> }
		        	</Form.Group>

		        	<Form.Group className={ errors.message && "has-error" }>
		        		<Form.Label>* Mensaje</Form.Label>
		        		<Form.Control ref={register({ required: true, minLength: 3, maxLength:255 })} name="message" as="textarea" onFocus={executeRecaptcha.bind(this)}></Form.Control>
		        		{ errors.message?.message && <p className="d-block text-danger font-small">{ errors.message?.message }</p> }
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