import { router, Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons'; // 👈 Импортируем иконки
import { Text, View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3b82f6",
        tabBarInactiveTintColor: "#8E8E93",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Учёт",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" color={color} size={size} />
          ),
        }}
      />
      
      <Tabs.Screen 
        name="expenses"
        options={{
          title: "Траты",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="add"
        options={{
          title: "Добавить",
          tabBarIcon: ({ color, size, focused }) => (
            // Для кнопки "Добавить" можно сделать иконку с плюсиком в кружке
            <Ionicons name={focused ? "add-circle" : "add-circle-outline"} color={color} size={size + 4} />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault(); // Отменяем переход на пустой экран "add"
            router.push("/add-expense"); // Открываем модалку
          },
        }}
      />
      
      <Tabs.Screen 
        name="tables"
        options={{
          title: 'Таблица',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" color={color} size={size} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="profil"
        options={{
          title: "Профиль",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}