import React, { Component } from 'react'
import Sectionprops123 from './Sectionprops123'
class Section123 extends Component {
render() {
    return (
      <div>
        <section className="alert-section top-50">
          <div className="container">
            <div className="alert-title">We’re open for you.</div>
            <div className="alert-text">
              Our retail stores are closed, but you can buy our products here
              online and get fast, free delivery. If you need help finding the
              right product or have a question on your order, chat online with a
              Specialist or call 1-800-MY-APPLE.
              <br />
              For service and support, visit{" "}
              <a href="https://support.apple.com/">support.apple.com</a>.
            </div>
          </div>
        </section>
        <Sectionprops123
          sections="first-hightlight-wrapper"
          alert="New"
          titleClass="title-wraper bold black"
          title="iPad Pro"
          captionDiscription="iPad Pro available starting 3.25"
          detail="Magic Keyboard coming in May"
        />
        <Sectionprops123
          sections="second-hightlight-wrapper"
          alert="New"
          titleClass="title-wraper bold black"
          title="MacBook air"
          priceWrapper="price-wrapper grey"
          price="From $999."
          discriptionClass="description-wrapper black"
          discriptionText="Twice the speed. Twice the storage."
        />
        <Sectionprops123
          sections="third-hightlight-wrapper"
          alert=""
          titleClass="title-wraper bold "
          title="iPhone 11 Pro"
          priceWrapper="price-wrapper "
          discriptionClass="description-wrapper"
          discriptionText="Pro cameras. Pro display. Pro performance."
          price="From $24.95/mo. or $599 with trade‑in."
        />
      
      </div>
    );
}
}
export default Section123