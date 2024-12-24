import Link from 'next/link'
import Button from '@/components/ui/Button'
import Heading from '@/components/ui/Heading'
import Text from '@/components/ui/Text'
import TextField from '@/components/ui/TextField'
import { useAuth } from '@/hooks/useAuth'
import { SignInData } from '@/types/auth'
import { parseCredentials } from '@/utils/cookies'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { GetServerSideProps } from 'next'
import * as yup from 'yup'
import { useState } from 'react'

const SignInFormSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(4).required(),
})
export default function SignIn() {
  const { signIn } = useAuth()
  const [isLogin, setIsLogin] = useState(false)
  const { register, handleSubmit, formState } = useForm<SignInData>({
    mode: 'onChange',
    resolver: yupResolver(SignInFormSchema),
  })

  const { isValid } = formState
  const onSubmit: SubmitHandler<SignInData> = async ({ email, password }) => {
    setIsLogin(!isLogin)
    await signIn({ email, password })
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#CBDCEB]">
      <div className="max-w-lg w-full h-fit p-10 bg-white rounded-lg">
        <header className="flex flex-col items-center gap-2 w-fit">
          <Link href="#">
            <img
              src="/logo.png"
              alt="Description of the image"
              height="100%"
              width="100%"
            />
          </Link>
          <Heading size="lg" className="mt-5 text-3xl text-primary-600">
            Đăng nhập tài khoản
          </Heading>
          <Text size="md" className="">
            Xin Mời Bạn Điền Thông Tin Vào Bên Dưới.
          </Text>
        </header>

        <main className="w-full mt-8">
          <form
            className="flex flex-col items-stretch gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="email" className="flex flex-col gap-3">
              <TextField.Root>
                {/* <TextField.Icon className="left-4">
                  <EnvelopeSimple weight="bold" />
                </TextField.Icon> */}
                <TextField.Input
                  id="email"
                  type="email"
                  className="bg-white border text-black focus-within:ring-1 ring-blue-400 placeholder:text-black"
                  placeholder="Email"
                  {...register('email')}
                />
              </TextField.Root>
            </label>

            <label htmlFor="password" className="flex flex-col gap-3">
              <TextField.Root>
                {/* <TextField.Icon className="left-4">
                  <Lock weight="bold" />
                </TextField.Icon> */}
                <TextField.Input
                  id="password"
                  type="password"
                  className="bg-white border text-black focus-within:ring-1 ring-blue-400 placeholder:text-black"
                  placeholder="Mật khẩu"
                  {...register('password')}
                />
              </TextField.Root>
            </label>
            <div className="flex flex-row justify-between">
              <label>
                <input type="checkbox" id="save" className="mr-3 text-white" />
                <span className="text-sm text-zinc-400">
                  Ghi nhớ đăng nhập?
                </span>
              </label>
              <Link href="#" className="text-primary-600 font-medium">
                Quên mật khẩu?
              </Link>
            </div>
            <Button className="uppercase mt-5 py-2" disabled={!isValid}>
              Đăng nhập
            </Button>
            <div className="border w-full"></div>
          </form>
        </main>

        <footer className="flex flex-col items-center mt-8">
          <Text size="sm" asChild>
            <Link href="/auth/signup" className=" text-black font-medium">
              {"Don't have an account?"}
              <span className="text-blue-400 hover:text-black"> Sign Up</span>
            </Link>
          </Text>
        </footer>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { accessToken, refreshToken } = parseCredentials(ctx)

  if (accessToken || refreshToken) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
