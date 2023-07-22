import { useState } from 'react';
import { Button, HelperText, RadioButton, Text, TextInput } from 'react-native-paper';
import Container from '../../components/common/Container';
import FlexWrapper from '../../components/common/FlexWrapper';
import { Formik } from 'formik';
import Toast from 'react-native-toast-message';
import { View } from 'react-native';
import { Link } from '@react-navigation/native';
import CONST from '../../utils/constant';
import APIAuth from '../../apis/auth.api';
import { RegisterUserValidationSchema } from '../../validation/auth.schema';
import theme from '../../styles/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RegisterUserScreenProps = NativeStackScreenProps<StackParamsList, 'RegisterUser'>

function RegisterUser({ navigation }: RegisterUserScreenProps) {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <Container
      style={{
        paddingVertical: 22,
      }}
    >
      <FlexWrapper
        style={{
          flex: 0.3,
        }}
      >
        <Text variant='displaySmall'>Buat Akun</Text>
        <Text variant='bodyMedium'>Buat akun untuk dapat menikmati fitur-fitur keren Pojok Baca App.</Text>
      </FlexWrapper>

      <Formik
        initialValues={CONST.INIT_USER_REGISTER_FORM}
        onSubmit={async (values) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { confirmPassword, ...userData } = values;
          try {
            await APIAuth.registerUser(userData);
            Toast.show({
              text1: CONST.TOAST_SUCCESS_TITLE,
              text2: 'Selamat akunmu berhasil dibuat! Sekarang coba masuk',
            });
            navigation.navigate('LoginUser');
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            const errMsg = error.response.data.message;
            Toast.show({
              type: 'error',
              text1: CONST.TOAST_ERROR_TITLE,
              text2: errMsg
            });
          }
        }}
        validationSchema={RegisterUserValidationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isSubmitting,
          isValid,
          setFieldValue
        }) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between'
            }}
          >
            <View>
              <TextInput
                label='Nama'
                mode='outlined'
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                error={Boolean(errors.name)}
                left={<TextInput.Icon icon='user' />}
              />
              <HelperText type='error' visible={true} padding='none'>
                {errors.name}
              </HelperText>

              <TextInput
                label='Email'
                mode='outlined'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={Boolean(errors.email)}
                textContentType='emailAddress'
                keyboardType='email-address'
                autoCapitalize='none'
                left={<TextInput.Icon icon='envelope' />}
              />
              <HelperText type='error' visible={true} padding='none'>
                {errors.email}
              </HelperText>

              <TextInput
                label='Password'
                mode='outlined'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={Boolean(errors.password)}
                secureTextEntry={!passwordVisibility}
                autoCapitalize='none'
                autoComplete='password'
                left={<TextInput.Icon icon='lock' />}
                right={<TextInput.Icon icon={passwordVisibility ? 'eye-slash' : 'eye'} onPress={togglePasswordVisibility} />}
              />
              <HelperText type='error' visible={true} padding='none'>
                {errors.password}
              </HelperText>

              <TextInput
                label='Konfirmasi Password'
                mode='outlined'
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                error={Boolean(errors.confirmPassword)}
                secureTextEntry={!passwordVisibility}
                autoCapitalize='none'
                autoComplete='password'
                left={<TextInput.Icon icon='lock' />}
                right={<TextInput.Icon icon={passwordVisibility ? 'eye-slash' : 'eye'} onPress={togglePasswordVisibility} />}
              />
              <HelperText type='error' visible={true} padding='none'>
                {errors.confirmPassword}
              </HelperText>

              <Text variant='bodyMedium' >Gender</Text>
              <RadioButton.Group
                onValueChange={(value) => setFieldValue('gender', value)}
                value={values.gender}
              >
                <RadioButton.Item value='male' label='Laki-laki' labelVariant='bodyMedium' />
                <RadioButton.Item value='female' label='Perempuan'  labelVariant='bodyMedium' />
              </RadioButton.Group>
              <HelperText type='error' visible={true} padding='none'>
                {errors.gender}
              </HelperText>
            </View>

            <View>
              <Button
                mode='contained'
                onPress={() => handleSubmit()}
                loading={isSubmitting}
                disabled={Boolean(!isValid)}
              >
              Daftar
              </Button>

              <Text variant='titleSmall' style={{ alignSelf: 'center', paddingVertical: 10 }}>
                Sudah punya akun?
                <Link to={{ screen: 'LoginUser' }} style={{ color: theme.colors.primary }} > Masuk</Link>
              </Text>
            </View>
          </View>
        )}
      </Formik>
    </Container>
  );
}

export default RegisterUser;
