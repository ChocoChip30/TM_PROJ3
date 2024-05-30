import React from "react";
import Nutrition from "../screens/Nutrition";
import Account from "../screens/Account";
import WorkoutPlan from "../screens/WorkoutPlan";
import Exercises from "../screens/Exercises";
import EachExercise from "../screens/EachExercise";
import Rest from "../screens/Rest";
import SearchBunch from "../screens/SearchBunch";
import Results from "./Results";
import RecipeResults from "./RecipeResults";
import ClickedRecipe from "./ClickedRecipe";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const WorkoutPlanStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WorkoutPlan" component={WorkoutPlan} />
      <Stack.Screen name="Exercises" component={Exercises} />
      <Stack.Screen name="EachExercise" component={EachExercise} />
      <Stack.Screen name="Rest" component={Rest} />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search" component={SearchBunch} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
};

const NutritionStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Nutrition" component={Nutrition} />
      <Stack.Screen name="RecipeResults" component={RecipeResults} />
      <Stack.Screen name="ClickedRecipe" component={ClickedRecipe} />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "pink",
        tabBarInactiveTintColor: "lightgray",
        tabBarStyle: {
          backgroundColor: "mistyrose",
        },
        headerStyle: {
          backgroundColor: "mistyrose",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "pink",
        },
      }}
    >
      <Tab.Screen
        name={"Workout Plan"}
        component={WorkoutPlanStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="dumbbell"
              size={24}
              color={focused ? "pink" : "silver"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Search"}
        component={SearchStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="search"
              size={24}
              color={focused ? "pink" : "silver"}
            />
          ),
        }}
      />

      <Tab.Screen
        name={"Nutrition"}
        component={NutritionStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="food-variant"
              size={24}
              color={focused ? "pink" : "silver"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Account"}
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="account"
              size={24}
              color={focused ? "pink" : "silver"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
