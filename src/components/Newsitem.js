import React, { Component } from 'react'
export class Newsitem extends Component {

    render() {
        let {title,discription,newsImage,newsUrl} = this.props;
        return (
            <div className="container">
                <div className="card" style={{width: "18rem"}}>
                    <img src={!newsImage ? "https://www.pewresearch.org/wp-content/uploads/sites/8/2016/07/PJ_2016.07.07_Modern-News-Consumer_0-01.png" :newsImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-success">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
