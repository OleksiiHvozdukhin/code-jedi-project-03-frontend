import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Desk, Tools } from '../../../images/icons/icons';
import {
  ElementText,
  SecondTitle,
  Title,
  TrackerHeading,
  TrackerList, TrackerListElement, TryTrackerButton,
  WaterTrackerContainer
} from './waterСonsumptionTracker.styled';


export const WaterOnsumptionTracker = () => {
  const navigate = useNavigate();

  function TryButton () {
    navigate('/signup');

  }

  return (
    <WaterTrackerContainer>
      <Title>Water consumption tracker</Title>
      <SecondTitle>Record daily water intake and track</SecondTitle>
      <TrackerHeading>Tracker Benefits</TrackerHeading>
      <TrackerList>
        <TrackerListElement>
          <Calendar />
          <ElementText>Habit drive</ElementText>
        </TrackerListElement>
        <TrackerListElement>
          <Desk />
          <ElementText>View statistics</ElementText>
        </TrackerListElement>
        <TrackerListElement>
          <Tools />
          <ElementText>Personal rate setting</ElementText>
        </TrackerListElement>
      </TrackerList>
      <TryTrackerButton type="button" onClick={TryButton}>Try tracker</TryTrackerButton>
    </WaterTrackerContainer>
  );
};
