import React, { Component } from 'react'

export class NewsItem extends Component {  

    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
        <div className='my-3'>
            <div className="card">
                <img 
                    src={!imageUrl ? 'https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/05/15/1200369-iphone15.jpg' : imageUrl} 
                    className="card-img-top"
                    alt="..." 
                />
                <div className="card-body">
                    <h5 className="card-title">{title} ...</h5>
                    <p className="card-text">{description} ...</p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
        )
    }
}

export default NewsItem