import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <>
     <div className="container project">
     <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Top recent projects</h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Here are my top 3 recent projects with live links and source code
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam dolore dignissimos culpa exercitationem ipsam distinctio quidem quis animi cum. Asperiores ratione, delectus fuga accusamus fugit dignissimos earum dolores natus.
        </p>
        <div className="row" id='ads' >
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className='card-notify-badge'>Full Stack</span>
                <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png" alt="project1" />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">MongoDb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto8">
                  <h5 className="text-uppercase">Chat-App</h5>
                </div>
                <a className='ad-btn' href="#">View</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className='card-notify-badge'>Full Stack</span>
                <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png" alt="project1" />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">MongoDb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto8">
                  <h5 className="text-uppercase">Chat-App</h5>
                </div>
                <a className='ad-btn' href="#">View</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className='card-notify-badge'>Full Stack</span>
                <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png" alt="project1" />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">MongoDb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto8">
                  <h5 className="text-uppercase">Chat-App</h5>
                </div>
                <a className='ad-btn' href="#">View</a>
              </div>
            </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default Projects