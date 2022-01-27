import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export class SearchProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange(event) {
        this.setState({
            search: event.target.value
        });
        this.props.handleSearchChange(this.state.search);
    }

    render() {
        return (
            <InputGroup className="mb-3">
                <FormControl
                    value={this.state.search}
                    onChange={this.handleSearchChange}
                    placeholder="Enter Product Name"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={() => this.props.searchProducts()}>
                    Search
                </Button>
            </InputGroup>
        );
    }
}

export default SearchProducts;
