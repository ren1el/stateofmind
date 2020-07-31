import React from 'react';

const TopSites = ({ sites }) => {

    return (
        <div>
            {sites.map(site => {
             return <p key={site.url}>{site.title} - {site.url}</p>
            })}
        </div>
    )
}

export default TopSites