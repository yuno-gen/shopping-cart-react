import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import FilterProducts from '../components/Home/FilterProducts';
import NavBar from '../components/Home/NavBar';
import ProductList from '../components/Home/ProductList';
import SearchProducts from '../components/Home/SearchProducts';
import Loading from '../components/Loading';
import axios from 'axios';
import '../css/Home.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            filteredProducts: [],
            loading: true,
            search: "",
            currentFilter: 'All'
        }
        this.setFilter = this.setFilter.bind(this);
        this.searchProducts = this.searchProducts.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products')
            .then((response)=>{
                this.setState({
                    products: response.data,
                    filteredProducts: response.data,
                    loading: false
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    setFilter(value) {       
        if (value === "All") {
            this.setState({
                currentFilter: value,
                filteredProducts: this.state.products
            });
        } else {
            let filteredProducts = this.state.products.filter(product => {
                return product.category === value.toLowerCase()
            });
            this.setState({
                currentFilter: value,
                filteredProducts: filteredProducts
            });
        }
    }

    handleSearchChange(search) {
        this.setState({
            search: search
        });
    }

    searchProducts() {
        let filteredProducts = this.state.products.filter(product => {
            return product.title.toLowerCase().match(this.state.search.toLowerCase());
        });
        this.setState({
            filteredProducts: filteredProducts
        });
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                {this.state.loading && 
                    <Loading />
                }
                {!this.state.loading && 
                    <React.Fragment>                        
                        <div className='home'>
                            <div className='search'>
                                <SearchProducts handleSearchChange={this.handleSearchChange} searchProducts={this.searchProducts} />
                            </div>
                            <div className='category-filter'>
                                <Row  className='justify-content-between'>                                 
                                    <FilterProducts currentFilter={this.state.currentFilter} setFilter={this.setFilter} />
                                    <Col>                                        
                                        <Button>
                                            Add Product
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                            <div className='productList'>
                                <ProductList products={this.state.filteredProducts} />
                            </div>
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }    
}

export default Home;