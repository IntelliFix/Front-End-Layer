import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../../assets/img/project-img1.png";
import projImg2 from "../../../assets/img/project-img2.png";
import projImg3 from "../../../assets/img/project-img3.png";

import ziad from "../../../assets/img/team pics/ziad.jpeg";
import matar from "../../../assets/img/team pics/matar.jpeg";
import fathy from "../../../assets/img/team pics/fathy.jpeg";
import karim from "../../../assets/img/team pics/karim.jpeg";
import migo from "../../../assets/img/team pics/migo.jpeg";
import alia from "../../../assets/img/team pics/alia.jpeg";



import colorSharp2 from "../../../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { PricingCard } from "./PricingCard";
import "./Pricing.css";

export const Pricings = () => {
  const pricing = {
    title: "Regular",
    description: "Design & Development",
    imgUrl: projImg1,
  };

  const projects = [
    {
      title: "Ziad Assem",
      description: "Frontend Development",
      imgUrl: ziad,
    },
    {
      title: "Mohamed Fathy",
      description: "DevOps",
      imgUrl: fathy,
    },
    {
      title: "Mohamed Abdelmegeed",
      description: "AI Engineering",
      imgUrl: migo,
    },
    {
      title: "Mohamed Matar",
      description: "Frontend Development",
      imgUrl: matar,
    },
    {
      title: "Karim Ashraf",
      description: "AI Engineering",
      imgUrl: karim,
    },

    {
      title: "Alia Tamer",
      description: "Backend Development",
      imgUrl: alia,
    },
  ];

  return (
    <section className="pricing" id="pricings">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Meet the Team</h2>
                  <p>The team behind builidng IntelliFix!</p>
                  <Tab.Container id="pricings-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <PricingCard></PricingCard>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
