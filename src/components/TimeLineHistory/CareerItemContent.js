import React from 'react'

import Grid from '@material-ui/core/Grid';
import Typography from '../Typography/index';

import IMAGE from '../../assets/castillo.jpg';
import './styles.css';

const CareerItemContent = ({ content }) => {
  const { title, subtitle, description, activities, technologies} = content;

  console.log({title, subtitle, description, activities, technologies})

  return (
    <Grid container spacing={1}>
      <Grid container item sm={6} xs={12} justify="space-between" direction="column">
        <Typography component="h1" variant="uppercase">{title}</Typography>
        <Typography component="h2">{subtitle}</Typography>
        <Typography component="p">{description}</Typography>
        <ul>
          {activities.map((item, index) => (
            <li key={`item-${index}`}><Typography component="p">{item}</Typography></li>
          ))}
        </ul>
        <div>
          <Typography component="p" variant="uppercase">Used Technologies</Typography>
          <p className="hannah-timeline__itemListTechnologies">
            {technologies.map((item, index) => (
              <span key={`item-${index}`}>
                <Typography component="p" color="white">
                  {item}
                </Typography>
              </span>
            ))}
          </p>
      </div>
      </Grid>
      <Grid container item sm={6} xs={12}>
        <img src={IMAGE} alt="castle" />
      </Grid>
    </Grid>
  )
}

export default CareerItemContent
