import LoginForm from '@/components/loginForm'
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const LoginPage = async () => {
    const sesion = await auth.api.getSession(
      {
        headers: await headers()
      }
    );

    if (sesion) {
      redirect("/");
    }
  return (
    <div>
      <LoginForm />
    </div>
  )
}

export default LoginPage
