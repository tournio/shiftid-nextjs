import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";

const Page = () => {
  return (
    <div>
      <Hero/>
      {/*<Location/>*/}
      {/*<Schedule/>*/}
      {/*<Raffle/>*/}
      {/*<Dallas full={false}/>*/}
      {/*<Local/>*/}
      {/*/!*<RegisterCTA/>*!/*/}
      {/*<Contact/>*/}
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
}

export default Page;
