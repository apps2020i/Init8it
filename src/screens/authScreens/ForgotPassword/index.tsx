import React from 'react';
import {View, Text, KeyboardAvoidingView, Platform} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import AppButton from '../../../components/button/AppButton';
import AppTextInput from '../../../components/textInput/AppTextInput';
import {forgotPassSchema} from '../../../helpers/yupHelper';
import {useForgotPasswordStyle} from './styles';
import {useTheme} from '../../../hooks';

const ForgotPassword = () => {
  const {colors} = useTheme();
  const styles = useForgotPasswordStyle();
  const {handleSubmit, control} = useForm<any, any>({
    resolver: forgotPassSchema,
    mode: 'onBlur',
    defaultValues: {
      email: '',
    },
  });

  const onForgotPassword = async data => {
    console.log('Forgot Password data:', data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>This side Logo</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Forgot Password</Text>
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <AppTextInput
              style={styles.input}
              errorTextStyle={styles.errorTextStyle}
              placeholderTextColor={colors.lightGray}
              value={value}
              placeholder="Password"
              onChangeText={onChange}
              error={error?.message}
              autoCorrect={false}
              textContentType="password"
            />
          )}
        />
        <AppButton
          style={styles.button}
          title="Reset Password"
          onPress={handleSubmit(onForgotPassword)}
          labelStyle={styles.lableStyle}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
