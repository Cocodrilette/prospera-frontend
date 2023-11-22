import { NextPage } from "next"
import { useUser, UserProfile } from "@clerk/nextjs"
import { Layout } from "../../../components/layout/layout"
import { Header } from "../../../components/layout/header"
import { Container7XL } from "../../../components/common/container-7xl"
import { UserProfileLoading } from "../../../components/sections/profile/user-profile-loading"

const Payment: NextPage = () => {
  const { isLoaded } = useUser()

  return (
    <Layout
      headerOptions={{ title: "Payment", description: "Payment" }}
      header={<Header />}
    >
      <Container7XL className="mb-20">
        {isLoaded ? <UserProfile /> : <UserProfileLoading />}
      </Container7XL>
    </Layout>
  )
}

export default Payment
