import React from 'react';
import { useNavigate } from 'react-router-dom';
import SpriteIcons from '../../../images/sprite.svg';
import {
  ElementText,
  SecondTitle,
  Title,
  TrackerHeading,
  TrackerList,
  TrackerListElement,
  TryTrackerButton,
  WaterTrackerContainer,
} from './waterСonsumptionTracker.styled';

export const WaterConsumptionTracker = () => {
  const navigate = useNavigate();

  function TryButton() {
    navigate('/signup');
  }

  return (
    <WaterTrackerContainer>
      <Title>Water consumption tracker</Title>
      <SecondTitle>Record daily water intake and track</SecondTitle>
      <TrackerHeading>Tracker Benefits</TrackerHeading>
      <TrackerList>
        <TrackerListElement>
          <svg><use xlinkHref={`${SpriteIcons}#icon-calendar-days`} /></svg>
          <ElementText>Habit drive</ElementText>
        </TrackerListElement>
        <TrackerListElement>
          <svg><use xlinkHref={`${SpriteIcons}#icon-presentation-chart-bar`} /></svg>
          <ElementText>View statistics</ElementText>
        </TrackerListElement>
        <TrackerListElement>
          <svg><use xlinkHref={`${SpriteIcons}#icon-wrench-screwdriver`} /></svg>
          <ElementText>Personal rate setting</ElementText>
        </TrackerListElement>
      </TrackerList>
      <TryTrackerButton type="button" onClick={TryButton}>
        Try tracker
      </TryTrackerButton>
    </WaterTrackerContainer>
  );
};
