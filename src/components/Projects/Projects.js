import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/voice.jpg";
import emotion from "../../Assets/Projects/Memory.jpg";
import editor from "../../Assets/Projects/Learn.jpg";
import chatify from "../../Assets/Projects/picking.jpg";
import suicide from "../../Assets/Projects/tour.jpg";
import bitsOfCode from "../../Assets/Projects/home.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Movie Recommendation System"
              description="About
Movie Recommendation System with Complete End-to-End Pipeline, Model Intregration & Web Application Hosted. It will also help you build similar projects."
              ghLink="https://github.com/unlisted02/Movie-Recommendation-System"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Smart Home Safety System"
              description="Built with JavaScript and Python can manage various household functions through automation and user control. JavaScript, especially with frameworks like Node.js, can handle API calls, and front-end web interfaces. Python manages backend automation tasks, control devices via microcontrollers and process sensor data based on user preferences or environmental changes."
              ghLink="https://github.com/unlisted02/Smart-House-Safety"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-Learning"
              description="The project involves the creation of an e-learning website using HTML, CSS, Bootstrap 5, and JavaScript. The website aims to provide a user-friendly and responsive platform for learners to access educational content. Unlisted Academy creates an interactive and visually appealing learning experience."
              ghLink="https://github.com/unlisted02/E-Learning"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Jarvis AI"
              description="The Jarvis Desktop Voice Assistant is a Python-based project designed to function as a personal voice assistant for desktop tasks. Through voice commands, it can perform actions like searching Wikipedia, opening browsers, playing music, and more. While not as advanced as movie portrayals, it simplifies daily routines by automating actions commonly performed on a computer. "
              ghLink="https://github.com/unlisted02/Jarvis--Desktop--Voice--Assistant"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Tour Site"
              description="ADVENTURE - Where Every Journey Begins. Adventure is your passport to explore the world's most exciting destinations and discover amazing events, tours, and hidden gems. Our platform is designed to inspire and assist you in planning your next unforgettable journey."
              ghLink="https://github.com/unlisted02/tourism-website"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Recoll Memory"
              description="The memory matching game is an interactive, browser-based game designed with HTML, CSS, and JavaScript. In this game, players aim to match pairs of cards by memorizing their positions. Each level typically increases in difficulty by adding more card pairs, thus challenging the player’s memory skills."
              ghLink="https://github.com/unlisted02/Memory-Matching-Game"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
