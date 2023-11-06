import { NextPage } from "next"
import { useState } from "react"
import { Card, Label, TextInput } from "flowbite-react"

import { Email, Name, Password } from "../types"
import { H1 } from "../../../components/common/text/h1"
import { Layout } from "../../../components/layout/layout"
import { Header } from "../../../components/layout/header"
import { Button } from "../../../components/common/button"
import { Container7XL } from "../../../components/common/container-7xl"
import { isValidEmail } from "../../../utils/validation/is-valid-email"
import { isValidPassword } from "../../../utils/validation/is-valid-password"
import { AiOutlineLoading } from "react-icons/ai"
import { useServer } from "../../../components/hooks/server"
import { useRouter } from "next/router"
import { InternalLink } from "../../../components/common/internal-link"
import { Text } from "../../../components/common/text"
import { isValidName } from "../../../utils/validation/is-valid-name"

const Register: NextPage = () => {
  const router = useRouter()

  const { post, error } = useServer()
  const { setIsAuth, setToken, setUser } = useAuth()

  const [isSubmitionCompleted, setIsSubmitionCompleted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [name, setName] = useState<Name | undefined>({
    name: undefined,
    isValid: true,
  })
  const [email, setEmail] = useState<Email | undefined>({
    email: undefined,
    isValid: true,
  })
  const [password, setPassword] = useState<Password | undefined>({
    password: undefined,
    isValid: true,
  })

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement>,
    type: "email" | "password" | "name"
  ) {
    if (type === "email") {
      if (isValidEmail(event.target.value)) {
        setEmail({ email: event.target.value, isValid: true })
      } else {
        setEmail({ email: event.target.value, isValid: false })
      }
    } else if (type === "password") {
      if (isValidPassword(event.target.value)) {
        setPassword({ password: event.target.value, isValid: true })
      } else {
        setPassword({ password: event.target.value, isValid: false })
      }
    } else {
      if (isValidName(event.target.value)) {
        setName({ name: event.target.value, isValid: true })
      } else {
        setName({ name: event.target.value, isValid: false })
      }
    }

    if (email?.isValid && password?.isValid && name?.isValid) {
      setIsSubmitionCompleted(true)
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = {
      email: email?.email,
      password: password?.password,
      name: name?.name,
    }

    setIsSubmitting(true)

    post("/auth/login", data)
      .then((response) => {
        if (
          response &&
          response.data &&
          response.data.access_token &&
          response.data.user
        ) {
          setToken(response.data.access_token)
          setUser(response.data.user)
          setIsAuth(true)
          router.push("/app")
        }
      })
      .catch(() => {
        console.log(error)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <Layout
      headerOptions={{ title: "Home", description: "Home" }}
      header={<Header />}
    >
      <Container7XL className="min-h-[calc(100vh-35vh)] p-auto">
        <Card>
          <form
            onSubmit={handleSubmit}
            className="flex max-w-md flex-col gap-4"
          >
            <H1 className="mb-5 md:mb-10">
              Create <span className="text-gray-400">your account</span>
            </H1>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name1" value="Your name" />
              </div>
              <TextInput
                value={email?.email}
                onChange={(event) => handleInputChange(event, "name")}
                id="name1"
                type="text"
                placeholder="John Doe"
                helperText
                required
              />
              {!name?.isValid && (
                <p className="text-red-500 text-sm">Invalid Name</p>
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                value={email?.email}
                onChange={(event) => handleInputChange(event, "email")}
                id="email1"
                type="email"
                placeholder="name@email.com"
                helperText
                required
              />
              {!email?.isValid && (
                <p className="text-red-500 text-sm">Invalid Email</p>
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                value={password?.password}
                onChange={(event) => handleInputChange(event, "password")}
                id="password1"
                type="password"
                autoCorrect=""
                autoComplete=""
                placeholder="••••••••••••••••"
                required
              />
              {!password?.isValid && (
                <p className="text-red-500 text-sm">
                  Password must be at least 8 characters long and contain at
                  least one uppercase letter, one lowercase letter, one number
                  and one special character
                </p>
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="ethAddress" value="Your Ethereum Address" />
              </div>
              <TextInput
                value={password?.password}
                onChange={(event) => handleInputChange(event, "password")}
                id="ethAddress"
                type="text"
                placeholder="0xe7804c37c13166fF0b37F5aE0BB07A3aEbb6e245"
                required
              />
              {!password?.isValid && (
                <p className="text-red-500 text-sm">
                  Password must be at least 8 characters long and contain at
                  least one uppercase letter, one lowercase letter, one number
                  and one special character
                </p>
              )}
            </div>
            <Button
              disabled={!isSubmitionCompleted && isSubmitting}
              type="submit"
              className="mt-4 peer-hover:bg-black disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="flex justify-between items-center">
                  <AiOutlineLoading className="animate-spin" /> Loading...
                </span>
              ) : (
                <span>Submit</span>
              )}
            </Button>
          </form>
          <Text>
            Already have an account?{" "}
            <InternalLink href="/auth/login">Login</InternalLink>
          </Text>
        </Card>
      </Container7XL>
    </Layout>
  )
}

export default Register
