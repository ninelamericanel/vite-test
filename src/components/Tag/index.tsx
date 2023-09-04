import { styled } from "styled-components"

import rectangle from '../../assets/Rectangle.svg'

const StyledTag = styled.p<{i: number}>`
height: 20px;
  background-color: ${props => props.i === 0 ? '#B233A6' : '#EBEEF6'};
  padding: 2px 6px;
    font-size: 12px;
  border-radius: 4px;
  color: ${props => props.i === 0 ? '#FFFFFF' : '#616C82'}
`

const StyledTagWithRectangle = styled.div`
    display: flex;
`

const StyledRectangle = styled.img`
    margin-left: -5px;
`

interface IProps { index: number, title: string}

const Tag = (props: IProps) => {
    const { index, title } = props;

    if (index === 1) return (
        <StyledTagWithRectangle>
            <StyledTag i={index}>{title}</StyledTag>
            <StyledRectangle src={rectangle}/>
        </StyledTagWithRectangle>
    )

    return <StyledTag i={index}>{title}</StyledTag>
    
}
  
export default Tag