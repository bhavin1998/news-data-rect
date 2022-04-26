import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  static propTypes = {}
  

  constructor(){
      super()
      this.state = {
          article: [],
          loading: false,
          page:1
      }
  }

  async componentDidMount() {
      console.log("this is ");
      let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=782cc09e779d4d7d940f866f4d78db4e&page=1";
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({article: parseData.articles, totalArticles: parseData.totalResults})
  }

  handlenextclick = async () => {

        if (this.state.page+1 > Math.ceil(this.state.totalResults/20)) {
            
        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=782cc09e779d4d7d940f866f4d78db4e&page=${this.state.page+1}&pageSize=20`;
            let data = await fetch(url);
            let parseData = await data.json();
            console.log(parseData);
            this.setState({
                page: this.state.page+1,
                article: parseData.articles
            })
        }
  }

  handleprevclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=782cc09e779d4d7d940f866f4d78db4e&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
  this.setState({
      page: this.state.page-1,
      article: parseData.articles
  })
  }

  render() {

    return (
      <div>
            <div className="container my-3">
                    <div className="row">
                        {this.state.article.map((element)=>{
                                return <div className="col-md-4 my-3" key={element.url}>
                                    <Newsitem title={element.title?element.title:""} postdesc={element.description?element.description:""} imageurl={element.urlToImage} newsurl={element.url} />
                                </div>
                        })}
                    </div>
            </div>
            <div className="container d-flex justify-content-between">
                <button type="button" className="btn btn-dark" onClick={this.handleprevclick}>Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next</button>

            </div>
      </div>
    )
  }
}

export default News