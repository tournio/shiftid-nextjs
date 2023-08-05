import Layout from "@/components/Layout/Layout";
import Area from "@/components/Area/Area";

const AboutDFW = () => {
  return (
    <div>
      <Area full={true}/>
    </div>
  );
}

AboutDFW.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
}

export default AboutDFW;
