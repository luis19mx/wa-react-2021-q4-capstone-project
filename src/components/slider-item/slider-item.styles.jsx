import styled from '@emotion/styled';

export const SliderItemStyles = styled.div`
  position: relative;
  border-radius: 1em;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 32em) {
    border: 1px solid var(--grey);
    padding: 0.66em;

    img {
      border-radius: 0.5em;
    }
  }
`;
export const SliderContentStyles = styled.div`
  position: absolute;
  right: 2%;
  bottom: 5%;
  background-color: hsla(0, 100%, 100%, 0.66);
  padding: 2em;
  backdrop-filter: blur(4px);
  border-radius: 0.3em;
  max-width: 540px;
  overflow: hidden;

  h2 {
    text-transform: capitalize;
    margin-bottom: 0.4em;
  }
  p {
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  @media (max-width: 40em) {
    padding: 1em 1em 0;
    h2 {
      font-size: 3.5vw;
    }
    p {
      font-size: 2.5vw;
    }
  }

  @media (max-width: 32em) {
    position: relative;

    h2 {
      font-size: 5vw;
    }
    p {
      font-size: 4vw;
    }
  }
`;
