import React from 'react';
import Tweet from './Tweet';

const TwitterFeed = (props) => {
  let tweets = props.data.map((tweet) => {
    let created_date = Date(parseInt(tweet.timestamp_ms));
    let favoritedClassName = "";
    let retweetedClassName = "";
    let display_url = "";
    let text = "";
    if (tweet.favorited) {
      favoritedClassName = "red";
    }
    if (tweet.retweeted) {
      retweetedClassName = "green";
    }
    if (tweet.entities.media !== undefined) {
      display_url = tweet.entities.media[0].media_url;
      text = tweet.text.slice(0, (tweet.entities.media[0].display_url.length*-1))
    }

    return (
      <Tweet
        key={tweet.id_str}
        text={text}
        created_date={created_date}
        data={tweet}
        favoritedClassName={favoritedClassName}
        retweetedClassName={retweetedClassName}
        display_url={display_url}
      />
    )
  });

  return(
    <div>
      <ul>
        {tweets}
      </ul>
    </div>
  )
};

export default TwitterFeed;
