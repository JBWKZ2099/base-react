import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import $ from 'jquery';
import DocumentMeta from 'react-document-meta';

class Home extends React.Component {
	/* Un método para hacer eventos onclick */
	constructor(props) {
		super(props);

		this.deployAlert = this.deployAlert.bind(this);
	}
	deployAlert() {
		alert("HOLA");
	}
	/* Un método para hacer eventos onclick */

	/* Otro método para hacer eventos onclick */
	deployAlert2(elem) {
		alert("HOLA - Método 2. \n Mira la consola del navegador :)");
		console.log( $(elem.target).text() );
	}
	/* Otro método para hacer eventos onclick */
	render() {
		const _pathname = window.location.pathname;
		const meta = {
			title: process.env.REACT_APP_NAME + " | Inicio",
			description: 'Esta es la descripción de la página de inicio',
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
				<section className="cover bg-cover-index">
					<span className="sr-only">If you need to add a cover to your page</span>
				</section>

				<Container fluid>
					<Row>
						<Col md="4" className="p-0">
							<img className="img-fluid d-block" src="http://placehold.it/650x300.png" alt=""/>
						</Col>
						<Col md="4" className="p-0">
							<img className="img-fluid d-block" src="http://placehold.it/650x300.png/333/aaa/" alt=""/>
						</Col>
						<Col md="4" className="p-0">
							<img className="img-fluid d-block" src="http://placehold.it/650x300.png" alt=""/>
						</Col>
					</Row>
				</Container>

			  <section className="container-custom py-3 py-md-5">
			    <Row className="justify-content-center">
			      <Col md="8">
			        <h1 className="font-weigh-bold">Home Page</h1>

			        <Row className="justify-content-center">
			        	<Col md="4">
			        		<Button variant="primary" className="mt-3 btn-block rounded-0" onClick={this.deployAlert}>Prueba onClick - Método 1</Button>
			        	</Col>
			        	<Col md="4">
			        		<Button variant="primary" className="mt-3 btn-block rounded-0" onClick={this.deployAlert2.bind(this)}>Prueba onClick - Método 2</Button>
			        	</Col>
			        </Row>
			      </Col>
			    </Row>
			  </section>

			  <section className="bg-default-02 py-3 py-md-5">
			  	<div className="container-custom">
			  		<Row className="mb-3">
			  			<Col md="12">
			  				<h1 className="h1-bigger">Example - h1-bigger</h1>
			  				<h2 className="h2-bigger">Example - h2-bigger</h2>
			  				<h3 className="h3-bigger">Example - h3-bigger</h3>
			  				<h4 className="h4-bigger">Example - h4-bigger</h4>
			  				<h5 className="h5-bigger">Example - h5-bigger</h5>
			  				<h6 className="h6-bigger mb-3">Example - h6-bigger</h6>

			  				<h1>Example - h1</h1>
			  				<h2>Example - h2</h2>
			  				<h3>Example - h3</h3>
			  				<h4>Example - h4</h4>
			  				<h5>Example - h5</h5>
			  				<h6>Example - h6</h6>

			  				<p className="mt-3">Imágen con efecto wordpress al hacer hover</p>
			  				<div className="wp-effect">
			  					<img className="img-fluid" src="http://placehold.it/300x200.png?text=300x200.jpg" alt="300x200.jpg"/>
			  				</div>
			  			</Col>
			  		</Row>

			  		<Row className="align-items-center">
			  			<Col md="4">
			  				<div className="wp-effect">
			  					<img className="img-fluid" src="http://placehold.it/400x400.png?text=400x400.jpg" alt="400x400.jpg"/>
			  				</div>
			  			</Col>
			  			<Col md="8">
			  				<p className="mb-3">
			  					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi rerum veritatis nulla pariatur optio! Fugiat dolores maxime tempora, ipsa ratione debitis doloremque quod praesentium quia. Nulla hic et accusamus doloribus.
			  				</p>
			  				<p>Otro ejemplo de hover.</p>
			  			</Col>
			  		</Row>
			  	</div>
			  </section>
			</DocumentMeta>
		);
	}
}

export default Home