import { useForm } from 'react-hook-form';

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    // Redirect to product detail page or handle login logic here
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: true })} placeholder='Email' />
      {errors.email && <span>This field is required</span>}
      <input {...register('password', { required: true })} placeholder='Password' type='password' />
      {errors.password && <span>This field is required</span>}
      <button type='submit'>Login</button>
    </form>
  );
}
