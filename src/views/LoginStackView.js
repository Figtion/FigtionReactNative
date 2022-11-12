import {createStackNavigator} from '@react-navigation/stack';

import ForgotPasswordView from './ForgotPasswordView';
import SigninView from './SigninView';
import SignupView from './SignupView';

const Stack = createStackNavigator();

function LoginStackView() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Signin" component={SigninView} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordView} />
      <Stack.Screen name="Signup" component={SignupView} />
    </Stack.Navigator>
  );
}

export default LoginStackView;
