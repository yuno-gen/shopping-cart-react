import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from '@mui/material/Rating';

class ProductCard extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Card className='product-card' onClick={() => {console.log("Hello WOlrd")}}>
                    <Card.Img variant='top' src={this.props.product.image} className='product-card-image' />
                    <Card.Body>
                        <Card.Title style={{ textOverflow: 'ellipsis' }}>{this.props.product.title}</Card.Title>
                        <Container>
                            <Row className='justify-content-between'>
                                <Col>Price: ${this.props.product.price}</Col>
                                <Col>Rating: <Rating value={this.props.product.rating.rate} readOnly /></Col>
                            </Row>
                        </Container>
                   </Card.Body>
                </Card>
            </div>
        )
    }    
}

export default ProductCard;