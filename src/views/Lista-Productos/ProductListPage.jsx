import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../Card/ProductCard';

const products = [
    {
      id: 1,
      name: 'Hamburguesa Clásica',
      price: 5000.00,
      image: 'https://picsum.photos/seed/picsum/200/300', // Agregar la ruta con la foto real
      description: 'Hamburguesa con carne de res, lechuga, tomate y queso.',
    },
    {
      id: 2,
      name: 'Hamburguesa BBQ',
      price: 9000.00,
      image: 'https://picsum.photos/seed/picsum/200/300', // Agregar la ruta con la foto real
      description: 'Hamburguesa con salsa BBQ, cebolla caramelizada y bacon.',
    },
    // Espacio para agregar mas productos en caso de ser necesario
  ];
  
  const ProductListPage = () => {
    const handleAddToCart = (productId) => {
      // Aqui se puede agregar el producto al carrito de compras
    };
  
    return (
      <Container>
        <h1 className="text-center my-4">Menú de Productos</h1>
        <Row>
          {products.map(product => (
            <Col md={4} key={product.id}>
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  };

  
  export default ProductListPage;