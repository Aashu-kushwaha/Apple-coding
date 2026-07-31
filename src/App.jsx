import React from "react";
import { RiNotification4Fill, RiPhoneFill, RiMenu3Line } from "@remixicon/react";

const App = () => {
  return (
    <>
      <nav>
        <div className="nav1">
          <img src="https://i.pinimg.com/736x/5e/67/1c/5e671cbe6457e88c59d9f82b8270749d.jpg" />
          <h4>Apple <br /> coding school</h4>
        </div>

        <div className="nav2">
          <h4>Home</h4>
          <h4>Courses</h4>
          <h4>Cohort 2.0</h4>
          <h4>Request Callback</h4>
          <h4>Classroom</h4>
          <h4></h4>
          <h4><i> <RiNotification4Fill /></i></h4>
          <img src="https://i.pinimg.com/736x/5e/67/1c/5e671cbe6457e88c59d9f82b8270749d.jpg" />

        </div>

        <div className="nav3">
          <h4> <RiPhoneFill /></h4>
          <h4> <RiNotification4Fill /></h4>
          <h4><RiMenu3Line /></h4>
        </div>
      </nav>
      <main>
        <section className="section1">
          <div className="left">
            <h1>2.0 Job Ready AI Powered Cohort: Complete Web Development + DSA + Gen-AI + Aptitude</h1>

            <div className="tags">
              <h4>MERN Stack</h4>
              <h4>DSA with JS</h4>
              <h4>AI Powered</h4>
              <h4>Placement Focus</h4>
              <h4>Aptitude & Reasoning</h4>
            </div>

            <h3>Price <span>₹</span>5999<span>₹ 11999</span>(+GST)</h3>
            <h5>Scratch card in the End!</h5>
            <div>
              <button>Buy Now</button>
              <button>View Syllabus</button>
            </div>
            <h6>Batch Starts on <span>15th September</span></h6>
          </div>
          <div className="right">
            <div>
              <div>
                <img src="https://dfdx9u0psdezh.cloudfront.net/courses/f0d09d530eb99c5e5e1b7b19.webp" alt="" />
              </div>
              <div>
                <h4>Language <span>Hinglish</span></h4>
                <h4>Certification <span>Yes</span></h4>
                <h4>Schedule <span>Mon-Sat</span>(8:30 PM)</h4>
                <h4>Total content <span>250+</span></h4>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default App