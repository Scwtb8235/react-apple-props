import React, { Component } from 'react'
import Sectionprops45 from './Sectionprops45'
import appletvlogo from "../../commonResource/images/icons/apple-tv-logo.png";
import watchseries from "../../commonResource/images/icons/watch-series5-logo.png"
import banker from "../../commonResource/images/home/banker.png"
import arcade from "../../commonResource/images/icons/arcade.png"
class Section45 extends Component {
render() {
  let watchAppleTv = (
    <div class="watch-more-wrapper">
      <a href="#">Watch now on the Apple TV App</a>
    </div>
  );
    return (
      <div>
        <Sectionprops45
          section="fourth-heghlight-wrapper"
          product="title-wraper"
          productText="iPhone 11"
          discription="description-wraper"
          discriptionTxt="Just the right amount of everything."
          price="price-wrapper"
          pricetxt="From $18.70/mo. or $499 with trade‑in."
          sup="1"
          linkswrapper="links-wrapper"
          learn="learn"
          buy="buy"
          linkWrapper="title-wraper white"
          linkWrappertxt="Get the latest CDC response to COVID-19."
          psa="Watch the PSA"
        />
        <Sectionprops45
          section="fifth-heghlight-wrapper"
          discription="title-wraper"
          learn=""
          buy=""
          leftLogo={appletvlogo}
          rightLogo={watchseries}
          tvshow={banker}
          watchAppleTv={watchAppleTv}
        />
        <Sectionprops45 section="sixth-heghlight-wrapper" leftLogo={arcade} />
      </div>
    );
}
}
export default Section45