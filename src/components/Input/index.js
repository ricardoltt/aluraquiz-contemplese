/* eslint-disable linebreak-style */
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const InputBase = styled.input`
    margin-bottom: 10px;
      height: 38px;
      border-radius: ${({ theme }) => theme.borderRadius};
      background-color: ${({ theme }) => theme.colors.mainBg};
      border: 1px solid ${({ theme }) => theme.colors.primary};
      outline: 0;
      padding: 0 16px;
      color: ${({ theme }) => theme.colors.contrastText};
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      ::-webkit-input-placeholder {
        color: ${({ theme }) => theme.colors.contrastText};
      }
      :-moz-placeholder {
        color: ${({ theme }) => theme.colors.contrastText};
      }
      ::-moz-placeholder {
        color: ${({ theme }) => theme.colors.contrastText};
        
      }
      :-ms-input-placeholder {  
        color: ${({ theme }) => theme.colors.contrastText};
      }
`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <InputBase
      onChange={onChange}
      placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
