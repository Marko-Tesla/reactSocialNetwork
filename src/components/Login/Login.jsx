import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field name={'login'} placeholder={'Login'} component={Input} validate={[required, maxLength10]}/>
         </div>
         <div>
            <Field name={'password'} placeholder={'Password'} component={Input} validate={[required, maxLength10]}/>   
         </div>     
         <div>
            <Field name={'rememberMe'} component={Input} type={'checkbox'}/> remember me   
         </div> 
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
   const onSubmit = (formData) => {
      console.log(formData);
   }
   return (
      <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit}/>
      </div>
   )
}

export default Login;
