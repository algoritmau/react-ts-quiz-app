import styled from 'styled-components'

export const AppStyles = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;
  backdrop-filter: blur(5.6rem);
  min-width: 32rem;
  max-width: 72rem;
  padding: 2.4rem;
  border-radius: 8px;
  border: 1px solid hsl(0 0% 3.1372549019607843% / 0.08);

  h1 {
    text-align: center;
    text-transform: uppercase;
  }

  p {
    color: #141414;
  }

  .start,
  .next {
    font-family: inherit;
    font-size: 1.6rem;
    border: none;
    padding: 1.6rem;
    text-align: center;
    cursor: pointer;
    background: linear-gradient(146deg, #fefefe, #ffcc91);
    border: 1px solid #d38558;
    box-shadow: 0px 4px 8px hsl(0 0% 3.1372549019607843% / 0.25);
    border-radius: 8px;
    text-transform: uppercase;
  }

  .score {
  }
`
