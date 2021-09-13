import React from 'react'
import PropTypes from 'prop-types';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';

import { convertTime } from '../../helpers/helpers';
import CareerItemContent from './CareerItemContent';

import './styles.css';

const TimeLineHistory = ({ content }) => {

  return (
    <>
    <Timeline align="left" className="hannah-timeline__opositeLeft">
      {content.map((item, index) => (
        <TimelineItem key={'item' + index}>
          <TimelineOppositeContent className="hannah-timeline__oposite">
            <Typography color="textSecondary">{convertTime(item.date)}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <CareerItemContent content={item.content} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
    </>
  )
}

TimeLineHistory.propTypes = {
  content: PropTypes.any
};

TimeLineHistory.defaultProps = {
  content: []  
}

export default TimeLineHistory
