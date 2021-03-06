import React, { Component } from 'react';

class TweetButton extends Component {
    constructor() {
        super()
    }

    openTweetForm = (e) => {
        e.preventDefault();
        console.log("tweeted!");
    };

    render() {
        let tweetFormOpen = this.props.tweetFormOpen;
        return (
            <button 
                type="button icon-twitter" 
                className="button default small btn-tweet" 
                onClick={() => {
                    this.props.toggleTweetForm(tweetFormOpen);
                    this.props.selectArticle(this.props.article);
                    }
                }>
                Tweet 
                <span className="icon-twitter"></span>
            </button>
        )
    }
}

export default TweetButton