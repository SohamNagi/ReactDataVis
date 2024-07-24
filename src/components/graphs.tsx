import Impressions from "./impressions";
import Clicks from "./clicks";

const Graphs = () => {
  return (
    <>
      <div className="p-2 mb-auto">
        <Impressions></Impressions>
        <Clicks></Clicks>
      </div>
    </>
  );
};

export default Graphs;
