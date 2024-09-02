import React, { useEffect } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10%;
  height: auto;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
`;

const Image = styled.img`
  /* width: 100%; */
  height: auto;
  border-radius: 10px;
  max-height: 50vh;
  object-fit: cover;
`;

const ViewMoreLink = styled.a`
  display: inline-block;
  position: relative;
  font-size: 1rem;
  color: #3e64ad;
  font-family: "Montserrat", sans-serif;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin-top: 20px;

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #3e64ad;
    transition: width 0.3s;
    position: absolute;
    bottom: -5px;
    left: 0;
  }

  &:hover:after {
    width: 100%;
  }
`;


const PortfolioModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>{project.title}</h2>
        <Image src={project.img} alt={project.title} />
        <p>{project.desc}</p>
        <ViewMoreLink href={project.link} target="_blank">
        View More →
      </ViewMoreLink>
      </ModalContent>
    </ModalOverlay>
  );
};

export default PortfolioModal;
