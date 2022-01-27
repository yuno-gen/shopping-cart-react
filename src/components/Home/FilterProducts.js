import React, { Component } from 'react';
import { Dropdown, Row, Col } from 'react-bootstrap';

export class FilterProducts extends Component {

    render() {
        return (
            <Row>
                <Col lg={1}>Filter By: </Col>                                        
                <Col lg={11}>                                    
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                            {this.props.currentFilter}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => this.props.setFilter("All")}>All</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.props.setFilter("Men's Clothing")}>Men's Clothing</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.props.setFilter("Jewelery")}>Jewelery</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.props.setFilter('Electronics')}>Electronics</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.props.setFilter("Women's Clothing")}>Women's Clothing</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        );
    }
}

export default FilterProducts;
