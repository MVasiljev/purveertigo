import { Header } from "./Header";

import { TechWeUse } from "./TechWeUse";
import { Footer } from "./Footer";
import { Careers } from "./Careers";
import { Portfolio } from "./Portfolio";

import Services from "./Services";

import SectionHeading from "../../Components/SectionHeading";
import OpenPositions from "./OpenPositions";
import About from "./About";
import VintageFrame from '../../Components/VintageFrame';

export const HomePage = () => {
  return (
    <>
      <Header />
      <SectionHeading title="Usluge" id="services" showOnMobile={true} />
      <Services />
      {/* <SectionHeading title="Services" id="services" showOnMobile={true} />


      <SectionHeading
        title="Previous Work"
        id="portfolio"
        showOnMobile={false}
      />

      <Portfolio />

      <SectionHeading title="Careers" id="careers" showOnMobile={true} />

      <Careers />
      <SectionHeading title="Open Positions" id="tech" showOnMobile={true}/>
      
      <OpenPositions />

      <SectionHeading title="Technologies" id="tech" showOnMobile={true} /> */}

      {/* <TechWeUse /> */}

      

      <SectionHeading title="Saznajte više" id="tech" showOnMobile={true} />
      <Careers />


      <VintageFrame />

      <Footer />
    </>
  );
};
