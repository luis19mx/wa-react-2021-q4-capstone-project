import styled from '@emotion/styled';

export const SearchTop = styled.div`
  --gutter: 10vh;
  margin: 2vh 4vw 4vh;
  border-bottom: 2px solid var(--l_grey);
  max-width: 100rem;

  span {
    color: var(--primary);
  }
`;
export const NotFoundStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 78vh;
  position: relative;

  p {
    margin-top: 10vh;
    font-size: 4vh;

    @media (max-width: 32em) {
      font-size: 6vw;
      text-align: center;
    }
  }
  span {
    display: block;
    font-size: smaller;
  }
  img {
    position: absolute;
    bottom: -5vh;
    width: 60vh;
  }
`;
