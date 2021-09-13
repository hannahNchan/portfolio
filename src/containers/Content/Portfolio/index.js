import React, { useEffect, useState } from 'react'

import Typography from '../../../components/Typography';

import TimeLineHistory from '../../../components/TimeLineHistory';
import httpRequestMethods from '../../../api'

const Portfolio = () => {
  const [path, setPath] = useState([]);

  useEffect(() => {
    const fetchAPI = () => {
      fetch('http://localhost:8000/career')
        .then(response => response.json())
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
    }

    fetchAPI() 
  },[])
  
  return (
    <TimeLineHistory content={path} />
  )
}

export default Portfolio
