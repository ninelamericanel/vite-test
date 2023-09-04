import { StyledRectangle, StyledTag, StyledTagWithRectangle } from "./styles";
import rectangle from "../../assets/Rectangle.svg";

interface IProps {
  index: number;
  title: string;
}

const Tag = (props: IProps) => {
  const { index, title } = props;

  if (index === 1)
    return (
      <StyledTagWithRectangle>
        <StyledTag i={index}>{title}</StyledTag>
        <StyledRectangle src={rectangle} />
      </StyledTagWithRectangle>
    );

  return <StyledTag i={index}>{title}</StyledTag>;
};

export default Tag;
