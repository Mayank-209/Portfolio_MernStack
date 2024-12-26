import React from "react";
import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiReact } from "react-icons/si";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp" >
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  #138781" }}
              date="2021 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Xiomi, private limited
              </h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum corrupti, earum magnam assumenda odio laudantium!
                Officiis ea nostrum esse maxime earum pariatur, quaerat
                possimus! Iure.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  #138781" }}
              date="2021 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Xiomi, private limited
              </h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum corrupti, earum magnam assumenda odio laudantium!
                Officiis ea nostrum esse maxime earum pariatur, quaerat
                possimus! Iure.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  #138781" }}
              date="2021 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Xiomi, private limited
              </h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum corrupti, earum magnam assumenda odio laudantium!
                Officiis ea nostrum esse maxime earum pariatur, quaerat
                possimus! Iure.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
