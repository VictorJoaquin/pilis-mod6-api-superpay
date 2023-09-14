import React from 'react';
import { View, Text, Button } from 'react-native';

const CobrarCarrito = () => {
  const handleCobrarCarrito = () => {
    // Aquí puedes implementar la lógica para cambiar el estado del carrito a "pagado"
    alert('Carrito cobrado exitosamente');
  };

  return (
    <View>
      <Text>Cobrar Carrito</Text>
      <Button title="Cobrar Carrito" onPress={handleCobrarCarrito} />
    </View>
  );
};

export default CobrarCarrito;
