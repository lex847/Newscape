import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dotdotdot from 'react-dotdotdot';

import TweetButton from './TweetButton'

class NewsArticle extends Component {
    constructor() {
        super()

        this.state = {
        }

    }

    formatText = (text) => {
        if (text) {
            let string = text.replace(/&quot;/g, '\\"');
            return string;
        }
    }

    getImageSize = (url) => {
        let image = new Image();
        image.src = url;
        
        this.setState({
            height: image.naturalHeight,
            width: image.naturalWidth
        })
    }

    render() {

        const article = this.props.newsArticle;

        return (
            <div className="small-12 large-6 columns article-block">
                <div className="card" lang={article.sourceLanguage}>
                    {
                        article.urlToImage ? <img height={this.state.height} width={this.state.width} className="article-image" src={article.urlToImage} alt={article.title} onLoad={ () => this.getImageSize(article.urlToImage)}/> : ''
                    }
                  
                    <div className="card-section offhover">
                        <h4>{article.title}</h4>
                        <p><small>{this.props.dateFormatter(article.publishedAt)}</small> <small className="source">{article.sourceName}</small></p>
                    </div>

                    <div className="card-section onhover">
                        <small className="source-category icon-tag">{article.sourceCategory}</small>
                        <Dotdotdot clamp={7}>  
                          <p>{this.formatText(article.description)}</p>
                        </Dotdotdot>
                        <p>
                            <a className="button primary small" href={article.url} target="_blank"><span className="icon-link-ext"></span> View article</a>
                            { 
                                this.props.user ? <TweetButton 
                                    article={article} 
                                    tweetFormOpen={this.props.tweetFormOpen} 
                                    toggleTweetForm={this.props.toggleTweetForm}
                                    selectArticle={this.props.selectArticle}
                                /> 
                                : ''
                            }
                        </p>
                    </div>
                </div>
          </div>
        )
    }
}

export default NewsArticle