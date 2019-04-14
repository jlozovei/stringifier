import styled from 'styled-components';

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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__input,
    &__actions,
    &__result{
      width: 100%;
    }

    &__input{
      margin-bottom: 2rem;
    }

    &__result{
      margin-top: 2rem;
      min-height: 3.1875rem;
      padding: 1rem;
      border: 1px solid #323232;
      border-radius: 3px;
      font-size: .875rem;
      line-height: 1.32;
      color: #323232;
      transition: all ease-in-out 210ms;

      &--unavailable{
        cursor: not-allowed;
      }

      &--available{
        cursor: pointer;

        &:hover{
          border-color: #3e3ca7;
        }
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

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 2rem;
  color: #323232;
  text-align: center;

  h1{
    font-size: 2rem;
    line-height: 1.32;
    text-decoration: overline;
    margin: 0;
    transition: color ease-in-out 120ms;

    &:hover{
      color: #3e3ca7;
    }
  }

  p{
    font-size: 1rem;
    line-height: 1.63;
    margin: .75rem 0;
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 2rem;

  p{
    color: #323232;
    font-size: 1.125rem;
  }
`;
