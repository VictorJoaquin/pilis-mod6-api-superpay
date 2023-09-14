import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const VerCarrito = () => {
  const [codigoCarrito, setCodigoCarrito] = useState('');

  const handleVerCarrito = () => {
  
    alert(`Mostrar detalles del carrito con código: ${codigoCarrito}`);
  };

  return (
    <View>
      <Text>Ver Carrito por Código</Text>
      <TextInput
        placeholder="Código de Carrito"
        value={codigoCarrito}
        onChangeText={setCodigoCarrito}
      />
      <Button title="Ver Carrito" onPress={handleVerCarrito} />
    </View>
  );
};

export default VerCarrito;
