import { forwardRef, useMemo } from "react";
import {
  StyledBlockTodo,
  StyledHeader,
  StyledAvatar,
  TaskBlockOutStyled,
  CheckboxStyled,
  StyledTitle,
  DescriptionStyle,
  StyledDates,
  StyledDate,
  StyledFooter,
  StyledTags,
} from "./styles";
import { ITodo } from "../App";
import { truncString } from "../../utils/truncString";
import { getFakeLorem } from "../../utils/getFakeLorem";
import { getFakeDate } from "../../utils/getFakeDate";
import { toUpperCaseFirst } from "../../utils/toUpperCaseFirst";
import Tag from "../Tag/";
import avatar from "../../assets/avatar.jpeg";

interface IProps {
  todo: ITodo;
}
type Ref = HTMLLIElement;

const Todo = forwardRef<Ref, IProps>((props, ref) => {
  const { todo } = props;
  const fakeDescription = useMemo(
    () => truncString(getFakeLorem(2, 30), 30),
    [todo]
  );
  const fakeTags = useMemo(() => getFakeLorem(2, 2).split(" "), [todo]);
  const fakeDate = useMemo(() => getFakeDate(), [todo]);

  const todoBody = (
    <StyledBlockTodo>
      <StyledHeader>
        <CheckboxStyled type="checkbox" checked={todo.completed} />
        <StyledTitle>
          {toUpperCaseFirst(truncString(todo.title, 60))}
        </StyledTitle>
      </StyledHeader>
      <DescriptionStyle>{toUpperCaseFirst(fakeDescription)}</DescriptionStyle>
      <StyledDates>
        <StyledDate>{fakeDate?.startDate}</StyledDate>
        <StyledDate>{fakeDate?.endDate}</StyledDate>
      </StyledDates>
      <StyledFooter>
        <StyledTags>
          {fakeTags.map((item, i) => (
            <Tag index={i} title={toUpperCaseFirst(item)} />
          ))}
        </StyledTags>
        <StyledAvatar src={avatar} />
      </StyledFooter>
    </StyledBlockTodo>
  );

  return ref ? (
    <TaskBlockOutStyled ref={ref}>{todoBody}</TaskBlockOutStyled>
  ) : (
    <TaskBlockOutStyled>{todoBody}</TaskBlockOutStyled>
  );
});

export default Todo;
