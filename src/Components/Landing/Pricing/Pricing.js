import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../../assets/img/project-img1.png";
import projImg2 from "../../../assets/img/project-img2.png";
import projImg3 from "../../../assets/img/project-img3.png";
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
      imgUrl: projImg1,
    },
    {
      title: "Mohamed Abdelmegeed",
      description: "AI Engineering",
      imgUrl: projImg2,
    },
    {
      title: "Mohamed Fathy",
      description: "DevOps",
      imgUrl: projImg3,
    },
    {
      title: "Karim Ashraf",
      description: "AI Engineering",
      imgUrl: projImg1,
    },
    {
      title: "Mohamed Matar",
      description: "Frontend Development",
      imgUrl: projImg2,
    },
    {
      title: "Alia Tamer",
      description: "Backend Development",
      imgUrl: projImg3,
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
