import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import Location from "@/components/Location/Location";
import Schedule from "@/components/Schedule/Schedule";
import Area from "@/components/Area/Area";
import Local from "@/components/Local/Local";
import Contact from "@/components/Contact/Contact";


const Page = () => {
  return (
    <div>
      <Hero/>
      <Location/>
      <Schedule/>
      <Area full={false}/>
      <Local/>
      {/*/!*<RegisterCTA/>*!/*/}
      <Contact/>
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
