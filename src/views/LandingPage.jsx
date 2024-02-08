import React from "react";
import ButtonLink from "../components/ui/button/ButtonLink";
import Title from "../components/ui/textStyles/Title";
import Subtitle from "../components/ui/textStyles/Subtitle";
import Footer from "../components/footer/Footer";

const LandingPage = () => {
  return (
    <>
      <main className="flex flex-col justify-center text-center bg-aquamarine-300 absolute top-0 bottom-0 right-0 left-0">
        <section>
          <Title name={"BOARDIFY"} />
          <Subtitle txt={"Everything at the same place"} />
          <ButtonLink name={"DEMO"} page={"/Home"} />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
