// import { Stack } from "expo-router";

// export default function RootLayuot() {
//     return (
//         <Stack>
//             <Stack.Screen 
//                 options={{title: 'segkjsge'}}
//             />
//         </Stack>
//     )
// }


// import { Stack } from 'expo-router';
// import { useAuth } from '../hooks/useAuth'; // ваш хук/контекст

// export default function RootLayout() {
//   const { isSignedIn, isLoading } = useAuth();

//   if (isLoading) return null; // или SplashScreen

//   return (
//     <Stack>
//       <Stack.Protected guard={isSignedIn}>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="product/[id]" />
//       </Stack.Protected>

//       <Stack.Protected guard={!isSignedIn}>
//         <Stack.Screen name="sign-in" options={{ headerShown: false }} />
//       </Stack.Protected>
//     </Stack>
//   );
// }

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