import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 5,
        category: 'general',

    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor(){
        super();
        console.log('Hello from constructor')
        this.state = {
            articles: [],
            loading: false,
            page: 1,

        }
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=742c60f664604972a98ab8edec28d65c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData  = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount() { 
        // console.log('cdm');
        // console.log(this.props.country, this.props.category);
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=742c60f664604972a98ab8edec28d65c&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({
        //     loading: true
        // })
        // let data = await fetch(url);
        // let parsedData  = await data.json();
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // })
        this.updateNews();
    }

    handleNextClick = async () => {
        console.log('next');
        // if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)){

        // } else{
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=742c60f664604972a98ab8edec28d65c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            
        //     this.setState({
        //         loading: true,
        //     });

        //     let data = await fetch(url);
        //     let parsedData  = await data.json();

        //     this.setState({
        //         articles: parsedData.articles,
        //         page: this.state.page + 1,
        //         loading: false,
        //     })
        // }
        this.setState({
            page: this.state.page + 1,
        })
        this.updateNews()
    }

    handlePrevClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=742c60f664604972a98ab8edec28d65c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({
        //     loading: true,
        // })
        // let data = await fetch(url);
        // let parsedData  = await data.json();

        // this.setState({
        //     articles: parsedData.articles,
        //     page: this.state.page - 1,
        //     loading: false
        // })
        this.setState({
            page: this.state.page - 1,
        })
        this.updateNews()
    }

    render() {
        return (
        <div className='container my-3'>
            <h2 className='text-center' style={{margin: '35px 0px'}}>Aupdates</h2>
            {this.state.loading && <Spinner />}
            <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
                return <div className="col-md-4" key = {element.url}>
                    <NewsItem 
                        title = {element.title ? element.title.slice(0, 45) : ''} 
                        description = {element.description ? element.description.slice(0, 88) : ''} 
                        imageUrl = {element.urlToImage} 
                        newsUrl = {element.url} 
                        author = {element.author}
                        date = {element.publishedAt}
                        source = {element.source.name}
                    />
                </div>
            })}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled = {this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button disabled = {(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        </div>
        )
    }
}

export default News