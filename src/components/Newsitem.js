import React, { Component } from 'react'
export class Newsitem extends Component {

    render() {
        let {title,discription,newsImage,newsUrl,author,date,source} = this.props;
        return (
            <div className="container">
                <div className="card mx-2 my-5" >
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"  style={{left: "86%!important", zIndex: '1'}}>
    <span class="badge">{source}</span>
  </span>
                    <img src={!newsImage ? "https://www.pewresearch.org/wp-content/uploads/sites/8/2016/07/PJ_2016.07.07_Modern-News-Consumer_0-01.png" :newsImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <p className="card-text"><small className="text-danger">By {!author ? "Unknown" : author} | On {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-success">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
