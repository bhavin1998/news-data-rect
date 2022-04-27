// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Newsitem extends Component {
  static propTypes = {}

  render() {
      let {title,postdesc,imageurl,newsurl} = this.props
    return (
      <div>
          <div className="card" style={{width: "18rem"}}>
              <img src={imageurl} className="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{postdesc}...</p>
              <a href={newsurl} rel="noreferrer"  className="btn btn-primary btn-sm" target="_blank">Read More</a>
              </div>
          </div>
      </div>
    )
  }
}

export default Newsitem