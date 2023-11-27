import React, {useRef} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Easing,
} from 'react-native';
import AppButton from '../../../components/button/AppButton';
import AppTextInput from '../../../components/textInput/AppTextInput';
import {loginFormSchema} from '../../../helpers/yupHelper';
import {Controller, useForm} from 'react-hook-form';
import {useLoginStyle} from './styles';
import {useLoginMutation} from '../../../services/authService';
import {ROUTES} from '../../../constants/routeConstant';
import {navigate, replace} from '../../../navigation/rootNavigation';

const {Value, timing} = Animated;

const Login = () => {
  const [login] = useLoginMutation();
  const styles = useLoginStyle();
  const {handleSubmit, control, getValues} = useForm<any, any>({
    resolver: loginFormSchema,
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onLogin = async () => {
    const {email, password} = getValues();
    if (!email || !password) {
      return;
    } else {
      login({
        username: 'kminchelle',
        password: '0lelplR',
      }).then(() => {
        replace(ROUTES.app);
      });
    }
  };
  const translateY = useRef(new Value(0)).current;

  const animateForm = (value: number, duration: number) => {
    timing(translateY, {
      toValue: value,
      useNativeDriver: false,
      duration,
      easing: Easing.inOut(Easing.ease),
    }).start();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>This side Logo</Text>
      </View>
      <Animated.View
        style={[styles.formContainer, {transform: [{translateY}]}]}>
        <Text style={styles.title}>Login</Text>
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <AppTextInput
              style={styles.input}
              errorTextStyle={styles.errorTextStyle}
              placeholderTextColor={'#aaa'}
              value={value}
              placeholder="Email"
              onChangeText={onChange}
              onBlur={() => animateForm(0, 300)}
              onFocus={() => animateForm(-100, 300)}
              error={error?.message}
              autoCorrect={false}
              textContentType="emailAddress"
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <AppTextInput
              style={styles.input}
              errorTextStyle={styles.errorTextStyle}
              placeholderTextColor={'#aaa'}
              value={value}
              placeholder="Password"
              onChangeText={onChange}
              onBlur={() => animateForm(0, 300)}
              onFocus={() => animateForm(-100, 300)}
              error={error?.message}
              autoCorrect={false}
              textContentType="password"
            />
          )}
        />
        <AppButton
          style={styles.loginButton}
          title="Login"
          onPress={handleSubmit(onLogin)}
          labelStyle={styles.lableStyle}
        />
        <AppButton
          style={styles.loginButton}
          title="Forgot Password"
          onPress={() => navigate('ForgotPassword')}
          labelStyle={styles.lableStyle}
        />
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default Login;
