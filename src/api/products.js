const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Obtener todos los productos
export const getProductsFn = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/products`);
    if (!res.ok) {
      throw new Error("Error al obtener los productos");
    }
    const products = await res.json();
    return products;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

// Crear un nuevo producto
export const createProduct = async (productData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (!res.ok) {
      throw new Error("Error al crear el producto");
    }
    const newProduct = await res.json();
    return newProduct;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

// Actualizar un producto existente
export const updateProduct = async (productId, updatedData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    if (!res.ok) {
      const errorResponse = await res.json(); // Intenta leer el mensaje de error
      console.error("Error en el backend:", errorResponse);
      throw new Error("Error al actualizar el producto");
    }
    const updatedProduct = await res.json();
    return updatedProduct;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

// Eliminar un producto
export const deleteProduct = async (productId) => {
  try {
    const res = await fetch(`${BACKEND_URL}/products/${productId}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Error al eliminar el producto");
    }
    return true;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};
