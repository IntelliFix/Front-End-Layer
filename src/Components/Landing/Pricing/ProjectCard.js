import { Col } from "react-bootstrap";
import './Pricing.css';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="pric-imgbx">
        <img src={imgUrl} />
        <div className="pric-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
