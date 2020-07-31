// /*global chrome*/
import React, { useEffect, useState } from 'react';
import TopSites from './components/TopSites'
import './App.css';

function App() {
  const [sites, setSites] = useState([])

  // useEffect(() => {
  //     chrome.topSites.get(sites => setSites(sites.concat(sites)))
  // }, [])

  const loadTopSites= () => {
    setSites(sites.concat(topSites))
  }
  
  useEffect(loadTopSites, [])

  return (
      <TopSites sites={sites} />
  )
}

const topSites = [
  {
    title: 'YouTube',
    url: 'https://www.youtube.com/'
  },
  {
    title: '(2) Facebook',
    url: 'https://www.facebook.com/'
  },
  {
    title: 'Dashboard',
    url: 'https://canvas.eee.uci.edu/'
  },
  {
    title: 'All Categories - Twitch',
    url: 'https://www.twitch.tv/directory'
  },
  {
    title: 'Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more',
    url: 'https://www.amazon.com/'
  },
  {
    title: 'GitHub',
    url: 'https://github.com/'
  },
  {
    title: 'Google',
    url: 'https://www.google.com/'
  },
  {
    title: 'Firecode.io | Coding Interview Answers and Trainer',
    url: 'https://www.firecode.io/'
  }
]

export default App;
