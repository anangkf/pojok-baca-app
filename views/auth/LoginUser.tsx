import { useContext, useState } from 'react';
import { Button, Divider, HelperText, Text, TextInput } from 'react-native-paper';
import { View } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import Container from '../../components/common/Container';
import { Link } from '@react-navigation/native';
import FlexWrapper from '../../components/common/FlexWrapper';
import { Formik } from 'formik';
import Toast from 'react-native-toast-message';
import { LoginUserValidationSchema } from '../../validation/auth.schema';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import theme from '../../styles/theme';
import APIAuth from '../../apis/auth.api';
import CONST from '../../utils/constant';

type LoginUserScreenProps = NativeStackScreenProps<StackParamsList, 'LoginUser'>

function LoginUser({ navigation }: LoginUserScreenProps) {
  const { login } = useContext(AuthContext) as AuthContextType;
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
        <Text variant='displaySmall'>Hola Bibliomania!</Text>
        <Text variant='bodyMedium'>Buku-bukumu sudah menanti untuk dibaca. Jangan biarkan debu pada bukumu menebal!</Text>
      </FlexWrapper>

      <Formik
        initialValues={CONST.INIT_LOGIN_FORM}
        onSubmit={async (values) => {
          try {
            const res = await APIAuth.loginUser(values);
            login(res.accessToken);
            Toast.show({
              text1: CONST.TOAST_SUCCESS_TITLE,
              text2: 'Berhasil masuk'
            });
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            const errMsg = error?.response?.data?.message || error.message;
            Toast.show({
              type: 'error',
              text1: CONST.TOAST_ERROR_TITLE,
              text2: errMsg
            });
          }
        }}
        validationSchema={LoginUserValidationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isSubmitting,
          isValid
        }) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between'
            }}
          >
            <View>
              <TextInput
                label='Email'
                mode='outlined'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={Boolean(errors.email)}
                keyboardType='email-address'
                textContentType='emailAddress'
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
              <Text variant='titleSmall' style={{ alignSelf: 'flex-end', color: theme.colors.primary, paddingBottom: 14 }}>
                <Link to={{ screen: 'LoginAdmin' }} >Lupa password?</Link>
              </Text>
            </View>

            <View>
              <Button
                mode='contained'
                onPress={() => handleSubmit()}
                loading={isSubmitting}
                disabled={!isValid}
              >
              Masuk
              </Button>
              <Button mode='text' onPress={() => navigation.navigate('LoginAdmin')} >Masuk sebagai Admin</Button>
              <Divider />
              <Text variant='titleSmall' style={{ alignSelf: 'center', paddingBottom: 14 }}>
                Belum punya akun?
                <Link to={{ screen: 'RegisterUser' }} style={{ color: theme.colors.primary }} > Daftar</Link>
              </Text>
            </View>
          </View>
        )}
      </Formik>
    </Container>
  );
}

export default LoginUser;
