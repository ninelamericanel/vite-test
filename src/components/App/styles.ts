import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding: 4px 18px;
`;

export const StyledListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 8px;
  width: 263px;
  height: 100%;
  margin: 0 auto;
`;

export const StyledToday = styled.p`
  color: #50b810;
  font-size: 14px;
  line-height: 140%;
  font-weight: 600;
`;

export const StyledCountTodods = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 6px;
  border: 1px solid #7b8aab;
  border-radius: 4px;

  min-width: 20px;
  height: 20px;

  font-size: 12px;
`;

export const StyledList = styled.ul`
  height: 690px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  overflow-y: scroll;
`;

export const StyledBlockButtons = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const StyledButton = styled.button`
  width: 20px;
  height: 20px;

  border: none;
  outline: none;
`;

export const StyledMessage = styled.h3`
  text-align: center;
`;
