import { NextPage } from "next"
import { Layout } from "../../../components/layout/layout"
import { Card, Checkbox, Label, TextInput } from "flowbite-react"
import { H1 } from "../../../components/common/text/h1"
import { Header } from "../../../components/layout/header"
import { Button } from "../../../components/common/button"
import { Container7XL } from "../../../components/common/container-7xl"

const Login: NextPage = () => {
  return (
    <Layout
      headerOptions={{ title: "Home", description: "Home" }}
      header={<Header />}
    >
      <Container7XL className="min-h-[calc(100vh-35vh)] p-auto">
        <Card>
          <form className="flex max-w-md flex-col gap-4">
            <H1 className="mb-5 md:mb-10">
              Login <span className="text-gray-400">to your account</span>
            </H1>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                autoCorrect=""
                autoComplete=""
                placeholder="••••••••••••••••"
                required
              />
            </div>
            <Button
              disabled={true}
              type="submit"
              className="mt-4 peer-hover:bg-black disabled:opacity-50"
            >
              Submit
            </Button>
          </form>
        </Card>
      </Container7XL>
    </Layout>
  )
}

export default Login
