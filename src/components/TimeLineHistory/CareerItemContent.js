import React from 'react'

import Grid from '@material-ui/core/Grid';
import Typography from '../Typography/index';
import Divider from '@material-ui/core/Divider';

import './styles.css';
import IMAGE from '../../assets/castillo.jpg';

const CareerItemContent = ({ content }) => {
  const { title, subtitle, description, activities, technologies} = content;

  return (
    <Grid container spacing={1}>
      <Grid style={{ marginBottom: '1rem' }} container item sm={6} xs={12} justify="space-between" direction="column">
        <Typography component="h1" variant="uppercase">{title}</Typography>
        <Typography component="h2">{subtitle}</Typography>
        <Typography component="p">{description}</Typography>
        <Typography component="h3" variant="uppercase">Key contributions</Typography>
        <ul>
          {activities.map((item, index) => (
            <li key={`item-${index}`} style={{ marginBottom: '1rem' }}>
              <Typography variant="list" component="p">{item}</Typography>
            </li>
          ))}
        </ul>
        <div style={{ marginBottom: '1rem' }}>
          <Typography component="h3" variant="uppercase">Used Technologies</Typography>
          <p className="hannah-timeline__itemListTechnologies">
            {technologies.map((item, index) => (
              <span key={`item-${index}`}>
                <Typography component="p" fontSize="12px" variant="bold uppercase" color="white">
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
      <Divider orientation="horizontal" variant="middle" style={{ width: '100%', marginLeft: '0px' }} />
    </Grid>
  )
}

export default CareerItemContent
