import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page : 1,
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5eed93fe2f26482e94b6928d7b6e10f6&page=1&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, totalResult: parsedData.totalResults})

    }

    handleNextClick = async () => {
        if(!( this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pagesize))){
            this.setState({
                loading: true,
            })

            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5eed93fe2f26482e94b6928d7b6e10f6&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page : this.state.page + 1,
                articles: parsedData.articles,
                loading: false,
            })
        }
    }


    handlePrevClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5eed93fe2f26482e94b6928d7b6e10f6&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
         this.setState({
            page : this.state.page - 1,
            articles: parsedData.articles
         })
    }

  render() {
    return (
        
      <div>
        <h3 className='tex-center'> This is news keys</h3>
       {this.state.loading && <Loading />}

        <div className='container my-3'>
            <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-3" key={element.url}>
                            {!this.state.loading && <NewsItem  title={element.title.slice(0,40)} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} /> }
                        </div>
                })}
            </div>
        </div>
        <div className="container d-flex justify-content-between">
                <button className="btn btn-primary" type="button" onClick={this.handlePrevClick}>Previous</button>
                <button className="btn btn-primary" type="button" onClick={this.handleNextClick}>Next</button>
        </div>
      </div>
    )
  }
}

export default News
