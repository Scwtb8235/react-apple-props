import React, { Component } from 'react'


class Sectionprops45 extends Component {
render() {
    return (
      <>
        <section class={this.props.section}>
          <div class="container-fluid">
            <div class="row">
              <div class="left-side-wrapper col-sm-12 col-md-6">
                <div class="left-side-container">
                  <div class={this.props.product}>
                    {this.props.productText}
                    <img src={this.props.leftLogo} alt="" />
                </div>
                {/* <div class="tvshow-logo-wraper">
							<img src={this.props.tvshow} alt="" />
				</div> */}

                <div class={this.props.discription}>
                    {this.props.discriptionTxt}
                  </div>
                  <div class={this.props.price}>
                    {this.props.pricetxt}
                    <sup>{this.props.sup}</sup>
                  </div>

                  <div class={this.props.linkswrapper}>
                    <ul>
                      <li>
                        <a href="">{this.props.learn}</a>
                      </li>
                      <li>
                        <a href="">{this.props.buy}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="right-side-wrapper col-sm-12 col-md-6">
                <div class="right-side-container">
                <div class={this.props.linkWrapper}>
                    {this.props.linkWrappertxt}
                    <img src={this.props.rightLogo} alt="" />
                </div>
                
                  <div class="links-wrapper white">
                    <ul>
                      <li>
                        <a href="">{this.props.psa}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.props.watchAppleTv}
        </section>
      </>
    );
}
}
export default Sectionprops45