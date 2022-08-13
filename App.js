import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthProvider } from "./providers/AuthProvider";

import { WelcomeView } from "./views/WelcomeView";
import { SignUpView } from "./views/SignUpView";
import { HomeView } from "./views/HomeView";
import { ClockInView } from "./views/ClockInView";
import { ClockOutView } from "./views/ClockOutView";
import { MarkAbsenceView } from "./views/MarkAbsenceView";
import { ShowStats } from "./views/ShowStats";
import { CompensationView } from "./views/CompensationView";
import { HolidayView } from "./views/HolidayView";

import { Logout } from "./components/Logout";

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomeView}
            options={{ title: "Sign In" }}
          />
          <Stack.Screen
            name="Sign Up"
            component={SignUpView}
            options={{ title: "Create User" }}
          />
          <Stack.Screen
            name="Home"
            component={HomeView}
            title="HomeView"
            headerBackTitle="LOG OUT"
            options={{
              headerRight:
              function Header() {
                return <Logout />;
              },
            }}
          />
          <Stack.Screen
            name="Clock In"
            component={ClockInView}
            title="ClockInView"
            headerBackTitle="LOG OUT"
          />
          <Stack.Screen
            name="Clock Out"
            component={ClockOutView}
            title="ClockOutView"
            headerBackTitle="LOG OUT"
          />
          <Stack.Screen
            name="Mark Absence"
            component={MarkAbsenceView}
            title="MarkAbsenceView"
          />
          <Stack.Screen
            name="Show Stats"
            component={ShowStats}
            title="ShowStats"
          />
          <Stack.Screen
            name="Compensation"
            component={CompensationView}
            title="CompensationView"
          />
          <Stack.Screen
            name="Holiday"
            component={HolidayView}
            title="HolidayView"
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
