import styled from '@emotion/styled';

export const CartItemStyles = styled.div`
  --width: 23%;

  width: 100%;
  background-color: #fff;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  justify-content: center;
`;
export const ImageStyles = styled.div`
  width: 23%;
  padding-right: 15px;
  display: flex;
  justify-content: center;

  img {
    width: 70%;
    height: 100%;
    object-fit: contain;
  }
`;
export const NameStyles = styled.div`
  width: var(--width);
  display: flex;
  justify-content: center;
`;
export const QuantityWrapperStyles = styled.div`
  width: var(--width);
  display: flex;
  justify-content: center;
`;
export const QuantityStyles = styled.span`
  margin: 0 10px;
`;
export const ArrowStyles = styled.span`
  cursor: pointer;
`;
export const PriceStyles = styled.span`
  width: var(--width);
  text-align: center;
`;
export const RemoveStyles = styled.div`
  padding-left: 12px;
  cursor: pointer;
  will-change: transform;
  transform: scale(1);
  transform-origin: right;
  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.1);
  }
`;
