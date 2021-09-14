import React, { useEffect, useState } from 'react'

import Typography from '../../../components/Typography';

import httpRequestMethods from '../../../api'
import TimeLineHistory from '../../../components/TimeLineHistory';

const Portfolio = () => {
  const [path, setPath] = useState([]);

  useEffect(() => {
    fetchAPI() 
  },[])

  const fetchAPI = () => {
    httpRequestMethods.get('career')
      .then(({ payload }) => {
        setPath(payload.map(i => {
          return {
            date: i.date,
              content: {
                ...i.content,
                  activities: JSON.parse(i.content.activities),
                  technologies: JSON.parse(i.content.technologies)
              }
          }
        }));
      })
  };
  
  return (
    <TimeLineHistory content={path} />
  )
}

export default Portfolio
