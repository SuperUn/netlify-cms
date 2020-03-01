import React from 'react';
import styled from '@emotion/styled';
import Avatar from '../Avatar';

const AvatarButton = styled(Avatar)`
  margin-left: 0.5rem;
  cursor: pointer;
  transition: 200ms;
  ${({ active, theme }) =>
    active ? `box-shadow: 0 0 0 4px ${theme.color.elevatedSurfaceHighlight}` : ''}
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.75;
  }
`;

export default AvatarButton;
