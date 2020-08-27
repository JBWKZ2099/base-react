import React from "react";
import {Row, Col} from 'react-bootstrap';

class Footer extends React.Component {
	getCurrentYear = () => {
		return new Date().getFullYear();
	}
	render() {
		return(
			<footer className="container-fluid bg-default py-3 py-md-5">
			  <Row>
			    <div className="container-custom">
			      <Row className="align-items-center">
			        <Col md="12" className="text-center">
			          <p>Todos los Derechos Reservados {this.getCurrentYear()} &copy;</p>
			        </Col>
			      </Row>
			    </div>
			  </Row>
			</footer>
		);
	}
}

export default Footer;