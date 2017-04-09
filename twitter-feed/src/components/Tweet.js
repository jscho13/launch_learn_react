import React from 'react';

const Tweet = (props) => {

  return(
    <li className="row">
      <div>
        <span>{props.data.user.name}</span>
        <span>@{props.data.user.screen_name}</span>      
        <img src={props.data.user.profile_image_url} />
        <span>{props.text}</span>
        <span>{props.created_date}</span>
        <img src={props.display_url} />
      </div>
      <div>
        <span>
          <i onClick={() => { alert("reply") }} className="fa fa-reply" aria-hidden="true"></i>
          <i onClick={() => { alert("retweet") }} className="fa fa-repeat" style={{paddingLeft: '10px'}} aria-hidden="true"></i>
          <i onClick={() => { alert("like") }} className="fa fa-heart" style={{paddingLeft: '10px'}} aria-hidden="true"></i>
          <i onClick={() => { alert("more") }} className="fa fa-ellipsis-h" style={{paddingLeft: '10px'}} aria-hidden="true"></i>
        </span>
        <div className={props.favoritedClassName}>Retweet Count: {props.data.retweet_count}</div>
        <div className={props.retweetedClassName}>Favorite Count: {props.data.favorite_count}</div>
      </div>
    </li>
  )
};

export default Tweet;
