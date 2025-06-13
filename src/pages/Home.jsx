import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | PeerSolve</title>
      </Helmet>
      <Banner></Banner>
      <Features></Features>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
