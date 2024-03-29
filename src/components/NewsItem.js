import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div>
         <div className="card" style={{width : "18rem"}}>
            <img src={imageUrl?imageUrl:"https://cdn.zeebiz.com/sites/default/files/2024/01/20/277049-ritess.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
