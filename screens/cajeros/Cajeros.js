// Cajeros.js

import React from 'react';
import { View, Text } from 'react-native';

// Importa las pantallas relacionadas con la gestión de cajeros
import PantallaCajeros1 from './PantallaCajeros';


const Cajeros = () => {
  // Puedes definir la navegación entre las pantallas de gestión de cajeros aquí

  return (
    <View>
      <Text>Gestión de Cajeros</Text>
      {/* Aquí puedes agregar componentes y navegación relacionados con cajeros */}
      <PantallaCajeros/>
    </View>
  );
};

export default Cajeros;
