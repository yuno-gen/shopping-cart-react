import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

class ProductCard extends Component {


    render() {
        return (
            <React.Fragment>



                <Card className='product-card'>
                    <Card.Img variant='top' src={this.props.product.image} className='product-card-image' />
                    <Card.Body>
                        <Card.Title style={{ textOverflow: 'ellipsis' }}>{this.props.product.title}</Card.Title>
                        <Container>
                            <Row className='justify-content-between'>
                                <Col>Price: ${this.props.product.price}</Col>
                                <Col>Rating: <Rating value={this.props.product.rating.rate} readOnly /></Col>
                            </Row>
                            <Row>
                                <Col><Button className='product-card-button'>Add To Cart</Button></Col>
                                <Col>
                                    <Button onClick={()=>this.props.deleteProduct(this.props.product)} variant="outlined" color="error" startIcon={<DeleteIcon />}>
                                        Delete
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>


            </React.Fragment>
        )
    }
}

export default ProductCard;