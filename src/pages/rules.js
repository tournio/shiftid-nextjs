import Layout from "@/components/Layout/Layout";
import TournamentRules from "@/components/TournamentRules/TournamentRules";
import Sponsors from "@/components/Sponsors/Sponsors";

const Rules = () => {
  return (
    <div>
      <TournamentRules/>
    </div>
  );
}

Rules.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
}

export default Rules;
