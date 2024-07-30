import React, { useRef } from "react";
import VerticalBox from "./VerticalBox";
import HorizontalBox from "./HorizontalBox";
import Heading from "../Heading";
import Image from "next/image";
import Paragraph from "../Paragraph";
import { useInView } from "framer-motion";

const Tracks = () => {
  return (
    <section id="tracks" className="Track-section">
      <Image
        src="/images/backgrounds/bg_1.jpg"
        alt="Background"
        layout="fill"
        quality={100}
        className="Track-section__background"
      />
      <div className="heading">
        <h1 className="heading-shadow">TRACKS</h1>
        <Heading className="heading-small">TRACKS</Heading>
      </div>
      <div className="tracks-para">
        <Paragraph>
          HackTheSpace features a variety of tracks, each designed to
          guide hackers to tackle specific challenges. By offering diverse
          tracks, we cater to a wide range of interests and expertise, fostering
          creativity, collaboration, and meaningful innovation among hackers.
        </Paragraph>
        <Paragraph>
          HackTheSpace is not just an event; it is a chance to Think, Build and
          Launch. With diverse tracks covering cutting-edge tech, there is
          something for everyone, from experts to newcomers. Join us on this
          journey of discovery and problem-solving. Lets unleash tech full
          potential and make a lasting impact.
        </Paragraph>
      </div>
      <div className="tracks-container">
        <div className="box-bundle">
          <VerticalBox title={"Open Innovation"} img={"idea.svg"} />
          <HorizontalBox
            title1={"Internet Of Things"}
            title2={"Cloud & Devops"}
            inView={true}
            img1={"IOT.svg"}
            img2={"Cloud.svg"}
          />
        </div>
        <div className="box-bundle">
          <VerticalBox title={"Open Innovation"} img={"idea.svg"} />
          <HorizontalBox
            title1={"Internet Of Things"}
            title2={"Cloud & Devops"}
            inView={true}
            img1={"IOT.svg"}
            img2={"Cloud.svg"}
          />
        </div>
      </div>
      <Image
        src="/images/backgrounds/bg_5.png"
        alt="spaceship"
        width={120}
        height={120}
        className="spaceship"
      />
      <Image
        src="/images/backgrounds/bg_4.png"
        alt="Background"
        width={2000}
        height={2000}
        quality={100}
        className="Track-section__background2"
      />
    </section>
  );
};

export default Tracks;
