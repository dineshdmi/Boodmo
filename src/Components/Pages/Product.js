import React, { } from 'react';
import { Container, Row, Col } from 'reactstrap';
import BlogList from '../Blog/BlogList';
import Data from '../Assets/data/carData';
import CarItem from '../CartItem/Cartitem';
import company from '../Assets/logo.png';
import { TfiMoreAlt } from 'react-icons/tfi';
import './CSS/Product.css';

class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedProducts: 3,
        };
    }

    handleLoadMore = () => {
        this.setState((prevState) => ({
            displayedProducts: prevState.displayedProducts + 3,
        }));
    };

    render() {
        const { displayedProducts } = this.state;

        return (
            <div>
                <img src={company} alt="Top Image" style={{ width: '10%', height: 'auto' }} />
                <section>
                    <Container>
                        <Row>
                            <Col lg="12" className="text-center mb-5">
                                <h2 className="section-title">Hot Offers</h2>
                            </Col>

                            {Data.slice(0, displayedProducts).map((item) => (
                                <CarItem item={item} key={item.id} />
                            ))}
                        </Row>
                    </Container>
                    {displayedProducts < Data.length && (
                        <Row>
                            <Col lg="12" className="text-center mt-80">
                                <TfiMoreAlt className="load-more" onClick={this.handleLoadMore}>
                                    Load More Products
                                </TfiMoreAlt>
                            </Col>
                        </Row>
                    )}
                </section>

                <section>
                    <Container>
                        <Row>
                            <Col lg="12" className="mb-5 text-center">
                                <h2 className="section-title">Latest Blogs</h2>
                            </Col>

                            <BlogList />
                            <BlogList />
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

export default ProductList;