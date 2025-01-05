import Layout from "../components/Layout/Layout";
import Results from "../components/Results/Results";
import Hero from "@/components/Hero/Hero";
import Fundraisers from "@/components/Fundraisers/Fundraisers";

const Page = () => {
  return (
    <div>
      <Fundraisers/>
    </div>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
}

export default Page;
