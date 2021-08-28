import React, { Component } from 'react'
import Loader from './Loader';
import Newsitem from './Newsitem'

export class News extends Component {
    constructor(){
        super();

        // console.log("I am contructor of news Item");
        this.state = {
            articles : [],
            loading : false,
            page: 1,

        }
    }

       async componentDidMount(){
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8a7611815da345cc9c173e0eb3d77bf5&page=1&pageSize=${this.props.pageSize}`;
            this.setState({loading: true}); 
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({articles: parsedData.articles, 
                totolArticles: parsedData.totalResults,
            loading: false})
        }

        handlePrevClick = async() =>{
            
                console.log("Previous Clicked");
                console.log("next Clicked");
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8a7611815da345cc9c173e0eb3d77bf5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
                this.setState({loading: true});
                let data = await fetch(url);
                let parsedData = await data.json();

                this.setState({
                    page : this.state.page - 1,
                    articles: parsedData.articles,
                    loading:false,
                })
            }
        handleNextClick = async() =>{
            if(!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20 ))){
                // console.log("next Clicked");
                let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8a7611815da345cc9c173e0eb3d77bf5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
                this.setState({loading: true});
                let data = await fetch(url);
                let parsedData = await data.json();
                this.setState({
                    page : this.state.page + 1,
                    articles: parsedData.articles,
                    loading: false
                })
            }
        }     
        

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">News Ninja Top HeadLines</h1>
                {this.state.loading && <Loader />}
                <div className="row">
                {!this.state.loading && this.state.articles.map((element) =>{
                    console.log(element);
                    return <div className="col-md-4" key={element.url}>
                            <Newsitem  title={element.title?element.title:""} discription={element.description? element.description:""} newsImage={element.urlToImage} newsUrl ={element.url}/>
                        </div>
                })}
                </div>
                <div className="container d-flex justify-content-between">
                <button type="button" disabled={this.state.page <=1} className="btn btn-m btn-success mt-4" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className="btn btn-m btn-success mt-4" onClick={this.handleNextClick}>Next&rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
