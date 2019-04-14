import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  position: relative;
  padding: .75rem 1.125rem;
  min-width: 8rem;
  background-color: #ffffff;
  border: 1px solid #3e3ca7;
  border-radius: 3px;
  font-size: .875rem;
  letter-spacing: .2px;
  text-align: center;
  color: #3e3ca7;
  cursor: pointer;
  transition: all ease-in-out 120ms;

  &:hover{
    border-color: #3e3ca7;
    background-color: #3e3ca7;
    color: #ffffff;
  }
`;

export const StyledInput = styled.input`
  position: relative;
  width: 100%;
  padding: 1rem;
  border: 1px solid #323232;
  border-radius: 3px;
  font-size: .875rem;
  color: #323232;
  transition: all ease-in-out 120ms;

  &:focus{
    border-color: #3e3ca7;
    outline: none;
  }
`;

export const StyledSnackbar = styled.div`
  &.snackbar{
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    padding: .875rem;
    background-color: #323232;
    border-radius: 3px;
    font-size: .875rem;
    font-weight: bold;
    color: #ffffff;
    line-height: 1.32;
    opacity: 0;
    visibility: hidden;
    transition: all ease-in-out 210ms;

    &--active{
      opacity: 1;
      visibility: visible;
    }
  }
`;
