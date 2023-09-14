import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginCajero = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    if (username === 'nombredecajero' && password === 'contraseña') {
      // Autenticación exitosa, navega a la pantalla de gestión de carritos
      navigation.navigate('VerCarrito');
    } else {
      // Autenticación fallida, muestra un mensaje de error
      alert('Credenciales incorrectas');
    }
  };

  return (
    <View>
      <Text>Inicio de Sesión Cajero</Text>
      <TextInput
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
};

export default LoginCajero;
