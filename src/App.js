import React from 'react';
import logo from './dankgif.gif';
import './App.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


function App() {
  return (
    <div className="App">
      <h2 className="App2">🍔 Mar's Dunkin' Tweets 🍔</h2>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="HelaliMarouen"
          options={{height: 400, width: 600}}/>
      </header>
      <h6>Copyright @Mar 2019</h6>

    </div>
  );
}

export default App;
