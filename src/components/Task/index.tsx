import { forwardRef } from "react"
import { styled } from "styled-components"
import { ITodo } from "../../App"
import { truncString } from "../../utils/truncString"
import { getFakeLorem } from "../../utils/getFakeLorem"
import { getFakeDate } from "../../utils/getFakeDate"
import { toUpperCaseFirst } from '../../utils/toUpperCaseFirst'
import Tag from '../Tag/'

const StyledHeader = styled.div`
/* display: flex; */
align-items: start;
`
const TaskBlockStyled = styled.div`
  width: 258px;
  height: 158px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  border-radius: 7px;
  background-color: white;

  color: black;
`

const StyledDates = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledTags = styled.div`
  display: flex;
  column-gap: 4px;
`
const StyledDate = styled.p`
  color: #50B810;
  font-size: 13px;
  line-height: 140%;
  font-weight: 500;
`

const DescriptionStyle = styled.p`
  font-size: 13px;
  line-height: 140%;
  text-align: start;
`

const StyledTitle = styled.h3`
  font-size: 14px;
  line-height: 130%;
  font-weight: 500;
  color: #3D8FEC;
`

const TaskBlockOutStyled = styled.li`
display: flex;
align-items: center;
padding: 4px;
/* width: 265px; */
background-color: #F4F8FF;
border-radius: 7px;
`

const CheckboxStyled = styled.input`
  float: left;
`

const StyledAvatar = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;

    background-color: red;
`

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


interface IProps { todo: ITodo}
type Ref = HTMLLIElement;

const Todo = forwardRef<Ref, IProps>((props, ref) => {
    const { todo } = props;
    const { startDate, endDate } = getFakeDate();

    const todoBody = (
        <TaskBlockStyled>
          <StyledHeader>
            <CheckboxStyled type='checkbox' checked={todo.completed}/>
            <StyledTitle>{toUpperCaseFirst(truncString(todo.title, 60))}</StyledTitle>
          </StyledHeader>
          <DescriptionStyle>{toUpperCaseFirst(truncString(getFakeLorem(2, 30), 30))}</DescriptionStyle>
          <StyledDates>
            <StyledDate>{startDate}</StyledDate>
            <StyledDate>{endDate}</StyledDate>
          </StyledDates>
          <StyledFooter>
          <StyledTags>
            {getFakeLorem(2, 2).split(' ').map((item, i) => <Tag index={i} title={toUpperCaseFirst(item)}/>)}
          </StyledTags>
          <StyledAvatar />
          </StyledFooter>
        </TaskBlockStyled>
    )

    const contetn = ref ? (<TaskBlockOutStyled ref={ref}>
    {todoBody}
     </TaskBlockOutStyled>) : <TaskBlockOutStyled>
    {todoBody}
     </TaskBlockOutStyled>
    return contetn;
  })
  
export default Todo