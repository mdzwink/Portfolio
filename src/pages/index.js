import * as React from "react";
import './main.css';



const IndexPage = () => {

  return (

    <main>
        <section className="opening-screen" >
          <h1>Welcome... buckle up!</h1>
        </section>
        <section className="about-me" >
          <h1>About me</h1>
          <p>With an unconventional background in carpentry I needed to find out how I would apply my skillsets to my coding work...</p>
          <p>(down arrow)Keep scrolling to learn about my work(down arrow)</p>
        </section>
        <section className="projects" >
          <div className="static-cube">
            <div className="anim-cube">
              <div className="cube text">
                <h3>Projects</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}



export const Head = () => {
  <title>MZ Portfolio</title>
}

export default { IndexPage, Head }