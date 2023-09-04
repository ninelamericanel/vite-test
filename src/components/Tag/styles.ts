import { styled } from "styled-components";

export const StyledTag = styled.p<{ i: number }>`
  height: 20px;
  background-color: ${(props) => (props.i === 0 ? "#B233A6" : "#EBEEF6")};
  padding: 2px 6px;
  font-size: 12px;
  border-radius: 4px;
  color: ${(props) => (props.i === 0 ? "#FFFFFF" : "#616C82")};
`;

export const StyledTagWithRectangle = styled.div`
  display: flex;
`;

export const StyledRectangle = styled.img`
  margin-left: -5px;
`;
