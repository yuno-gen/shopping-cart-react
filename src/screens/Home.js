import React, { Component } from 'react';
import NavBar from '../components/Home/NavBar';
import ProductList from '../components/Home/ProductList';
import Loading from '../components/Loading';
import '../css/Home.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((data)=>{
                this.setState({
                    products: data,
                    loading: false
                });
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.loading && 
                    <Loading />
                }
                {!this.state.loading && 
                    <React.Fragment>
                        <NavBar />
                        <div className='home'>
                            <div className='search'>

                            </div>
                            <div className='productList'>
                                <ProductList products={this.state.products} />
                            </div>
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }    
}

export default Home;