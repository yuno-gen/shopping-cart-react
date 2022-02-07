import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

function mapReverse(array, fn) {
    return array.reduceRight(function (result, el) {
        result.push(fn(el));
        return result;
    }, []);
}
class ProductList extends Component {
    
   

    
    render() {
        let list = mapReverse(this.props.products, function (i) { return i; });
        console.log(this.props);
        return (
            <Container>
                <Row>
                {
                    /* 
                        List card such that on it shows 4 cards on large breakpoint
                        3 cards on medium and 2 cards on small breakpoint
                    */
                    list.map(product => 
                        (
                            <Col key={product.id} sm={6} md={4} lg={3}>                                
                                <ProductCard deleteProduct = {(val) => this.props.delete(val)} product={product} />
                            </Col>
                        )
                    )
                }
                </Row>
            </Container>
        )
    } 
       
}

export default ProductList;