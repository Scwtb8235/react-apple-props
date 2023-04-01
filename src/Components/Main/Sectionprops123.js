import React, { Component } from 'react'

class Sectionprops123 extends Component {
render() {
    return (
      <div>
        <section className={this.props.sections}>
          <div className="container">
            <div className="new-alert">{this.props.alert}</div>

            <div className={this.props.titleClass}>{this.props.title}</div>

            {/* discription for products */}
            <div class={this.props.discriptionClass}>
              {this.props.discriptionText}
            </div>
            <div class={this.props.priceWrapper}>{this.props.price}</div>

            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Order</a>
                </li>
              </ul>
            </div>

            <div className="ipod-caption row">
              <div className="col-sm-12 col-md-6 text-md-right">
                {this.props.captionDiscription}
              </div>
              <div className="col-sm-12 col-md-6 text-md-left">
                {this.props.detail}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
}
export default Sectionprops123