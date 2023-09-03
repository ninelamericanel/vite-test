import { styled } from "styled-components"
import { ITodo } from "../../App"
import { truncString } from "../../utils/truncString"
import { getFakeLorem } from "../../utils/getFakeLorem"
import { getFakeDate } from "../../utils/getFakeDate"

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

const TaskBlockOutStyled = styled.li`
display: flex;
align-items: center;
width: 265px;
// background-color: #F4F8FF;
background-color: black;
border-radius: 7px;
`

const StyledDates = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledTags = styled.div`
  display: flex;
  column-gap: 4px;
`

const StyledTag = styled.p<{i: number}>`
  background-color: ${props => props.i === 0 ? '#B233A6' : '#EBEEF6'};
  border-radius: 4px;
   padding: 2px 6px;
   `

const StyledDate = styled.p`
  color: #50B810;
  font-size: 13px;
  line-height: 140%;
  font-weight: 600;
`

const DescriptionStyle = styled.p`
  font-size: 13px;
  line-height: 140%;
  text-align: start;
`

const StyledTitle = styled.h3`
  font-size: 14px;
  line-height: 130%;
  color: #3D8FEC;
`

const CheckboxStyled = styled.input`
  float: left;
`
interface IProps { todo: ITodo}

function Todo(props: IProps) {
    const { todo } = props;
    const { startDate, endDate } = getFakeDate();

    return (
        <TaskBlockOutStyled key={todo.id}>
        <TaskBlockStyled>
          <StyledHeader>
            <CheckboxStyled type='checkbox' checked={todo.completed}/>
            <StyledTitle>{truncString(todo.title, 60)}</StyledTitle>
          </StyledHeader>
          <DescriptionStyle>{truncString(getFakeLorem(2, 30), 30)}</DescriptionStyle>
          <StyledDates>
            <StyledDate>{startDate}</StyledDate>
            <StyledDate>{endDate}</StyledDate>
          </StyledDates>
          <StyledTags>
            {getFakeLorem(2, 2).split(' ').map((item, i) => {
              return <StyledTag i={i}>{item}</StyledTag>
            })}
          </StyledTags>
        </TaskBlockStyled>
      </TaskBlockOutStyled>
    )
  }
  
export default Todo