import React from 'react';

const AddItemButton = ({ item }) => {
  const handleAddToCart = (quantity) => {
    console.log(`Añadir al carrito: ${item.name}, Cantidad: ${quantity}`);
    updateCart({ item, quantity });
  };

  const updateCart = (cartItem) => {
    console.log('Actualizar estado del carrito:', cartItem);
  };

  return (
    <div>
      <button onClick={() => handleAddToCart(1)}>Agregar al carrito</button>
    </div>
  );
};

export default AddItemButton;
