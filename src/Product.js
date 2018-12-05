import React from 'react';

const Product = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;

export default Product;
