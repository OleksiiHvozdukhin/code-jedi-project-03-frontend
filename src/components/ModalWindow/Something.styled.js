import styled, { keyframes } from 'styled-components';

const userTreeHover = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
`;

const userTreeButtonsHover = keyframes`
  0% {
    transform: scaleY(0.5) scaleX(0.5) translateY(0px) translateX(0px);
  }
  100% {
    transform: scaleY(1) scaleX(1) translateY(-16px) translateX(0px);
  }
`;

const startButtonShadow = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(55, 141, 250, 0.8);
  }
  100% {
    box-shadow: 0 0 0 20px rgba(55, 141, 250, 0);
  }
`;

export const UserTree = styled.div`
  position: fixed;
  width: 80px;
  left: 50%;
  bottom: 15px;
  margin-left: -28px;

  &:hover {
    .user-tree-buttons {
      animation: ${userTreeHover} 0.2s ease forwards;
    }

    .user-name {
      animation: ${userTreeButtonsHover} 0.3s ease forwards;
    }

    + .user-tree-buttons .user-name:before {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
      transform-origin: right center 0;
      transition-delay: 0.3s;
    }
  }
`;

export const StartButton = styled.div`
  position: absolute;
  bottom: 0;
  display: block;
  width: 80px;
  height: 80px;
  background-color: #407bff;
  border-radius: 50%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  animation: ${startButtonShadow} 2s ease infinite;

  &:hover {
    animation: none;
  }
`;

export const UserTreeButtons = styled.ul`
  position: absolute;
  left: 0;
  bottom: 65px;
  list-style: none;
  margin: 0;
  padding: 0;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s;
  column-count: 2;
`;

export const StartButtonIcon = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  background: url('../we/team-icon.svg') center no-repeat;
  background-size: 65px 65px;
`;

export const UserName = styled.span`
  display: inline-block;
  height: 40px;
  transform: scaleY(0.5) scaleX(0.5) translateY(0px) translateX(0px);
  transition: 0.3s;
`;

export const Tooltip = styled.div`
  top: 90%;
  margin-top: -11px;
  font-weight: 600;
  border-radius: 6px;
  background: #407bff;
  color: #fff;
  font-size: 12px;
  visibility: hidden;
  opacity: 0;
  padding: 8px 14px;
  position: absolute;
  transform: scale(0);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const TooltipRight = styled(Tooltip)`
  right: 100%;
  transform-origin: top right;

  &:hover {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
    transform-origin: right center 0;
  }
`;

export const TooltipLeft = styled(Tooltip)`
  left: 100%;
  transform-origin: top left;

  &:hover {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
    transform-origin: left center 0;
  }
`;

export const Users = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
