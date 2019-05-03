import React from "react";
import { Card, Button } from "antd";
import PropTypes from 'prop-types';

import "./style.sass"

const { Meta } = Card;

const Product = ({urlImage, title, url}) => {
  return (
    <React.Fragment>
    <a href={url}>
        <Card
            hoverable
            bordered={true}
            cover={<img alt="example" src={urlImage} className="image" />}
            className="card"
        >
            <Meta title={title} description={"Rp 100.000"} />
            <Button type="primary">Buy</Button>
        </Card>
        </a>
    </React.Fragment>

  );
};

Product.propTypes = {
    urlImage: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string
}

export default Product;
