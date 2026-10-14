import { router, Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#3b82f6" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "учёт финансов",
        }}
      />
      <Tabs.Screen 
        name="expenses"
        options={{
          title: "Траты",
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "Добавить",
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            router.push("/add-expense");
          },
        }}
      />
      <Tabs.Screen 
        name="tables"
        options={{title: 'Таблица'}}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Профиль",
        }}
      />
    </Tabs>
  );
}
