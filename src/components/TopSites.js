import React from 'react';

const TopSites = () => {
  const sites = [
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
  ];

  return (
    <div>
      {sites.map(site => {
        return <p key={site.url}>{site.title} - {site.url}</p>;
      })}
    </div>
  );
};

export default TopSites;