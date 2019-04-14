import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 2rem;
`;

export const StyledTitle = styled.h1`
  font-size: 2rem;
  line-height: 1.32;
  color: #323232;
  text-decoration: overline;
  margin: 0;
`;

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 2rem;

  p{
    color: #323232;
    font-size: 1.125rem;
  }

  a{
    color: #3e3ca7;
    font-weight: bold;
    text-decoration: none;
  }
`;

export const StyledContainer = styled.div`
  &.app{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 100vh;
    max-width: 58rem;
    margin: 0 auto;
    padding: 1rem;

    header,
    .page,
    footer{
      width: 100%;
    }

    .page{
      flex: 1;
    }
  }
`;

export const StyledPage = styled.div`
  &.page{
    &__input{
      margin-bottom: 2rem;
    }

    &__result{
      margin-top: 2rem;
      padding: 1rem;
      border: 1px solid #323232;
      font-size: .875rem;
      line-height: 1.32;
      color: #323232;
      transition: all ease-in-out 210ms;
      cursor: pointer;

      &:hover{
        border-color: #3e3ca7;
        outline: none;
      }
    }
  }
`;

export const StyledMenu = styled.nav`
  position: relative;

  ul{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0 -.5rem;

    li{
      padding: .5rem;
    }
  }
`;

