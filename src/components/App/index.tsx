import { useCallback, useState, useRef } from "react";
import Todo from "../Task";
import useFetch from "../../hooks/useFetch";
import amwork from "../../assets/amworkLogo.svg";
import superCRM from "../../assets/superCRMLogo.svg";
import buttonSvg from "../../assets/add_bold.svg";
import {
  StyledBlockButtons,
  StyledButton,
  StyledCountTodods,
  StyledHeader,
  StyledList,
  StyledListHeader,
  StyledMessage,
  StyledToday,
  StyledWrapper,
} from "./styles";

export interface ITodo {
  title: string;
  userId: number;
  id: number;
  completed: boolean;
}

function App() {
  const [page, setPage] = useState(0);
  const { loading, error, errorMessage, todos, hasNextPage } = useFetch(page);
  const intObserver = useRef<IntersectionObserver>();

  const lastNode = useCallback(
    (todo: HTMLLIElement) => {
      if (loading) return;
      if (intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((todos) => {
        if (todos[0].isIntersecting && hasNextPage) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (todo) intObserver.current.observe(todo);
    },
    [loading, hasNextPage]
  );

  return (
    <>
      <StyledHeader>
        <img src={amwork} />
        <span>x</span>
        <img src={superCRM} />
      </StyledHeader>
      <StyledWrapper>
        <StyledListHeader>
          <StyledToday>Today</StyledToday>
          <StyledBlockButtons>
            <StyledButton disabled>
              <img src={buttonSvg} />
            </StyledButton>
            <StyledCountTodods>{todos.length}</StyledCountTodods>
          </StyledBlockButtons>
        </StyledListHeader>

        <StyledList>
          {todos.map((item: ITodo, i: number) => {
            if (todos.length === i + 1)
              return <Todo key={item.id} todo={item} ref={lastNode} />;
            return <Todo key={item.id} todo={item} />;
          })}
          {loading && <StyledMessage>Loading...</StyledMessage>}
          {error && <StyledMessage>Error: {errorMessage}</StyledMessage>}
        </StyledList>
      </StyledWrapper>
    </>
  );
}

export default App;
