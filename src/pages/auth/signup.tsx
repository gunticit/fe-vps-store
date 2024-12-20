import Link from 'next/link'
import Button from '@/components/ui/Button'
import Heading from '@/components/ui/Heading'
import Text from '@/components/ui/Text'
import TextField from '@/components/ui/TextField'
import { useAuth } from '@/hooks/useAuth'
import { SignUpData } from '@/types/auth'
import { parseCredentials } from '@/utils/cookies'
import { yupResolver } from '@hookform/resolvers/yup'
// import { User, EnvelopeSimple, Lock } from 'phosphor-react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { GetServerSideProps } from 'next'
import * as yup from 'yup'

const SignUpFormSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')])
    .required(),
})
export default function SignUp() {
  const { signUp } = useAuth()
  const { handleSubmit, register, formState } = useForm<
    SignUpData & { confirmPassword: string }
  >({
    resolver: yupResolver(SignUpFormSchema),
  })
  const { isValid } = formState
  const onSubmit: SubmitHandler<SignUpData> = async ({
    name,
    email,
    password,
  }) => {
    await signUp({ name, email, password })
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start bg-[#CBDCEB] py-10 overflow-y-scroll">
      <div className="max-w-lg w-full h-fit p-10 bg-white rounded-lg">
        <header className="flex flex-col items-center gap-2">
          <Link href="#">
            <img
              src="/logo.png"
              alt="Description of the image"
              height="100%"
              width="100%"
            />
          </Link>
          <Heading className="text-3xl mt-5 text-primary-600">
            Đăng ký tài khoản
          </Heading>
          <Text size="lg" className="text-black">
            Xin Mời Bạn Điền Thông Tin Vào Bên Dưới.
          </Text>
        </header>

        <main className="w-full max-w-xl mt-8">
          <form
            className="flex flex-col items-stretch gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="name" className="flex flex-col gap-3">
              <TextField.Root>
                {/* <TextField.Icon className="left-4">
                  <User weight="bold" />
                </TextField.Icon> */}
                <TextField.Input
                  id="name"
                  type="text"
                  className="bg-white border focus-within:ring-1 ring-blue-400 placeholder:text-black"
                  placeholder="Họ và tên"
                  autoComplete="off"
                  {...register('name')}
                />
              </TextField.Root>
            </label>

            <label htmlFor="email" className="flex flex-col gap-3">
              <TextField.Root>
                {/* <TextField.Icon className="left-4">
                  <EnvelopeSimple weight="bold" />
                </TextField.Icon> */}
                <TextField.Input
                  id="email"
                  type="email"
                  className="bg-white border focus-within:ring-1 ring-blue-400 placeholder:text-black"
                  placeholder="Email"
                  autoComplete="off"
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
                  className="bg-white border focus-within:ring-1 ring-blue-400 placeholder:text-black"
                  placeholder="Mật khẩu"
                  autoComplete="off"
                  {...register('password')}
                />
              </TextField.Root>
            </label>
            <label htmlFor="confirmPassword" className="flex flex-col gap-3">
              <TextField.Root>
                {/* <TextField.Icon className="left-4">
                  <Lock weight="bold" />
                </TextField.Icon> */}
                <TextField.Input
                  id="confirmPassword"
                  type="password"
                  className="bg-white border focus-within:ring-1 ring-blue-400 placeholder:text-black"
                  placeholder="Xác nhận mật khẩu"
                  autoComplete="off"
                  {...register('confirmPassword')}
                />
              </TextField.Root>
            </label>

            <Button className="uppercase mt-8 py-2" disabled={!isValid}>
              Đăng ký
            </Button>
            <div className="border w-full"></div>
          </form>
        </main>

        <footer className="flex flex-row items-center justify-center mt-5">
          <Text size="sm" asChild>
            <Link href="/auth/signin" className="flex text-black font-medium">
              {'Already have an account?'}
              <span className="text-blue-400 hover:text-black"> Sign In</span>
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
