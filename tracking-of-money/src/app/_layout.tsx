import { Stack } from 'expo-router';
import { AuthProvider, useAuth } from '../../hooks/useAuth';


function RootNavigator() {
  const { isSignedIn } = useAuth();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={isSignedIn}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
        name="add-expense"
        options={{ presentation: 'transparentModal', animation: 'fade' }}
    />
      </Stack.Protected>

      <Stack.Protected guard={!isSignedIn}>
        <Stack.Screen name="sign-in" />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}