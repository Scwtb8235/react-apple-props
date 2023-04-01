import React, { Component } from 'react'

class Footerprops extends Component {
render() {
    return (
      <div>
        
        
          <li>
            <a href="{this.props.link}">
              {this.props.name}
            </a>
          </li>
          

      </div>
    );
}
}
export default Footerprops