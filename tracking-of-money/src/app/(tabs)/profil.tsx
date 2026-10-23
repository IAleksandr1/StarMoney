// app/(tabs)/profile.tsx
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../../hooks/useAuth';

export default function Profile() {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Привет, Александр!</Text>
      <Button title="Выйти" onPress={signOut} />
    </View>
  );
}