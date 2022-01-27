import React, { Component } from 'react';

class ProductDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                {
                    this.props.products.map(product => 
                        <div key={product.id}>{product.title}</div>
                    )
                }
            </div>
        )
    }    
}

export default ProductDetails;