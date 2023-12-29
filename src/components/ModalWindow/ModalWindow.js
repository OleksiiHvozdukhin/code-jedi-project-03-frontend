import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {
  BaseModalStyled,
  CloseButton,
  CloseIcon,
  ModalContent,
  ModalHeader,
} from './ModalWindow.styled';

import sprite from '../../images/sprite.svg';

export const ModalWindow = ({ onShow = true, children, title, onClose }) => {
  const modalRoot = document.querySelector('#modal-root');

  const modalContainerRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    const bodyScroll = disable => {
      document.body.style.overflow = disable ? 'hidden' : 'auto';
    };

    if (onShow || modalRoot.children.length !== 0) {
      bodyScroll(true);
    }

    const handleEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      bodyScroll(false);
      window.removeEventListener('keydown', handleEsc);
    };
  }, [modalRoot.children.length, onShow, onClose]);

  return createPortal(
    <BaseModalStyled onClick={onClose} ref={backdropRef}>
      <ModalContent onClick={e => e.stopPropagation()} ref={modalContainerRef}>
        <ModalHeader>
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>
            <CloseIcon>
              <use href={`${sprite}#icon-close`}></use>
            </CloseIcon>
          </CloseButton>
        </ModalHeader>
        <div>{children}</div>
      </ModalContent>
    </BaseModalStyled>,
    modalRoot
  );
};

ModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onShow: PropTypes.bool,
  title: PropTypes.string.isRequired,
};
