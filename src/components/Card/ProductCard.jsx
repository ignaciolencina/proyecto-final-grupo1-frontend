import React from 'react'
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product, onAddToCart}) => {
  const { id, name, price, image, description } = product;

  return (
    <Card className="mb-4">
    <Card.Img variant="top" src={image} alt={name} className="product-img" />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Card.Text>
        <strong>${price.toFixed(2)}</strong>
      </Card.Text>
      <button variant="primary" onClick={() => onAddToCart(id)}>
        Agregar al Pedido
      </button>
    </Card.Body>
    </Card>
    );
};

export default ProductCard