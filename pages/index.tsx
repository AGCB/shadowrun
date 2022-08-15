import type { NextPage } from "next";
import SoftwareData from "../components/SoftwareData/";

const Home: NextPage = () => {
  return (
    <div className="text-2xl text-red-200">
      <SoftwareData name="shadowrun" version="v0.0.0" />
    </div>
  );
};

export default Home;
