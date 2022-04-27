// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'

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
    //   console.log("this is ");
      let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=782cc09e779d4d7d940f866f4d78db4e&page=1";
      this.setState({loading: true});
      let data = await fetch(url);
      let parseData = await data.json();
    //   console.log(parseData);
      this.setState({article: parseData.articles, 
        totalArticles: parseData.totalResults,
        loading: false
    })
  }

  handlenextclick = async () => {

        if (!(this.state.page+1 > Math.ceil(this.state.totalResults/20))) {      
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=782cc09e779d4d7d940f866f4d78db4e&page=${this.state.page+1}&pageSize=20`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parseData = await data.json();
            // console.log(parseData);
            this.setState({
                page: this.state.page+1,
                article: parseData.articles,
                loading: false
            })
  }
}

    handleprevclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=782cc09e779d4d7d940f866f4d78db4e&page=${this.state.page-1}&pageSize=20`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData);
    this.setState({
        page: this.state.page-1,
        article: parseData.articles,
        loading: false,
    })
  }

  render() {

    return (
      <div>
          {this.state.loading && <Spinner/>}
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