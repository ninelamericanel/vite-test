import { styled } from "styled-components";

export const StyledHeader = styled.div`
  align-items: start;
`;

export const StyledBlockTodo = styled.div`
  width: 258px;
  height: 158px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 7px;
  background-color: white;

  color: black;
`;

export const StyledDates = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledTags = styled.div`
  display: flex;
  column-gap: 4px;
`;
export const StyledDate = styled.p`
  color: #50b810;
  font-size: 13px;
  line-height: 140%;
  font-weight: 500;
`;

export const DescriptionStyle = styled.p`
  font-size: 13px;
  line-height: 140%;
  text-align: start;
`;

export const StyledTitle = styled.h3`
  font-size: 14px;
  line-height: 130%;
  font-weight: 500;
  color: #3d8fec;
`;

export const TaskBlockOutStyled = styled.li`
  display: flex;
  align-items: center;
  padding: 4px;
  background-color: #f4f8ff;
  border-radius: 7px;
`;

export const CheckboxStyled = styled.input`
  margin-top: 2px;
  margin-right: 8px;
  float: left;
`;

export const StyledAvatar = styled.img<{ src: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;

  src: url(${(props) => props.src});
`;

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
