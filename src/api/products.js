const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Obtener todos los productos
export const getProductsFn = async () => {
  const res = await fetch(`${BACKEND_URL}/products`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Ocurrió un error leyendo los productos del menú");
  }

  return data;
};

// Crear un nuevo producto
export const createProduct = async (productData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
    if (!res.ok) {
      throw new Error('Error al crear el producto');
    }
    const newProduct = await res.json();
    return newProduct;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

// Actualizar un producto existente
export const updateProduct = async (productId, updatedData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (!res.ok) {
      throw new Error('Error al actualizar el producto');
    }
    const updatedProduct = await res.json();
    return updatedProduct;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

// Eliminar un producto
export const deleteProduct = async (productId) => {
  try {
    const res = await fetch(`${BACKEND_URL}/products/${productId}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error('Error al eliminar el producto');
    }
    return true;
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};
