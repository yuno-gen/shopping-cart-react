import React, { Component } from 'react';
import { Dropdown, Row, Col, Button } from 'react-bootstrap';

export class FilterProducts extends Component {

    render() {
        return (
            <Row>
                <Col lg={1}>Filter By: </Col>                                        
                <Col lg={9}>                                    
                    <Dropdown>
                        {/* Toggle to select category from below listed items */}
                        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                            {this.props.currentFilter}
                        </Dropdown.Toggle>

                        {/* Different Category to select from */}
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => this.props.setFilter("All")}>All</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.props.setFilter("Men's Clothing")}>Men's Clothing</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.props.setFilter("Jewelery")}>Jewelery</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.props.setFilter('Electronics')}>Electronics</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.props.setFilter("Women's Clothing")}>Women's Clothing</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col lg={2}>
                    {/* Add Product Button which shows the modal on click */}
                    <Button onClick={() => this.props.handleAddProduct()}>
                        Add Product
                    </Button>  
                </Col>
            </Row>
        );
    }
}

export default FilterProducts;
