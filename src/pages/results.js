import Layout from "../components/Layout/Layout";
import Results from "../components/Results/Results";
import Hero from "@/components/Hero/Hero";

const Page = () => {
  return (
    <div>
      <Hero linkToFront={true}/>
      <Results/>
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
