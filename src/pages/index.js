// import Hero from "@/components/hero";
// import Location from "@/components/location";
// import Schedule from "@/components/schedule";
// import RegisterCTA from "@/components/register_cta";
// import Contact from "@/components/contact";
// import Dallas from "@/components/dallas";
// import Sponsors from "@/components/sponsors";
// import Local from "@/components/local";
// import Raffle from "@/components/raffle";

import Layout from "@/components/Layout/Layout";

const Page = () => {
  return (
    <div>
      <h1>
        Here there be dragons!
      </h1>
      {/*<Hero/>*/}
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
