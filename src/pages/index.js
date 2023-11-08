import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import Location from "@/components/Location/Location";
import Schedule from "@/components/Schedule/Schedule";
import Area from "@/components/Area/Area";
import Local from "@/components/Local/Local";
import Contact from "@/components/Contact/Contact";
import Spotlight from "@/components/Spotlight/Spotlight";
import Results from "@/components/Results/Results";


const Page = () => {
  return (
    <div>
      <Hero/>
      <Spotlight/>
      <Results/>
      <Location/>
      <Schedule/>
      <Area full={false}/>
      <Local/>
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
