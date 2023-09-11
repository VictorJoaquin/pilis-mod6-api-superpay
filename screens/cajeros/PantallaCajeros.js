// PantallaCajeros.js

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const PantallaCajeros = () => {
  
  const [carrito, setCarrito] = useState({
    codigo: '12345', // El código del carrito
    items: [
      { id: 1, nombre: 'Producto 1', precio: 10 },
      { id: 2, nombre: 'Producto 2', precio: 15 },
      // Agrega más artículos según sea necesario
    ],
  });

  const mostrarCarrito = () => {
    // Lógica para mostrar el carrito en la pantalla del cajero
    console.log('Código de Carrito:', carrito.codigo);
    console.log('Artículos en el Carrito:');
    carrito.items.forEach((item) => {
      console.log(`ID: ${item.id}, Nombre: ${item.nombre}, Precio: ${item.precio}`);
    });
    // Puedes implementar la visualización en la interfaz de usuario aquí
  };

  return (
    <View>
      <Text>Pantalla del Cajero</Text>
      <Button title="Mostrar Carrito" onPress={mostrarCarrito} />
    </View>
  );
};

export default PantallaCajeros;
