import { useCallback, useState, useRef } from "react"
import { styled } from "styled-components"
import Todo from "./components/Task"
import useFetch from "./hooks/useFetch"

export interface ITodo {title: string; userId: number; id: number; completed: boolean}

const StyledHeader = styled.header`
  display: flex;
`

const StyledWrapper = styled.div`
display: flex;
justify-content: center;
  width: 100%;
  height: 100%;
  
`

const StyledList = styled.ul`
display: flex;
flex-direction: column;
row-gap: 8px;
`
function App() {
  const [page, setPage] = useState(0);
  const {loading, error, errorMessage, todos, hasNextPage} = useFetch(page)
  const intObserver = useRef<IntersectionObserver>();
  const lastNode = useCallback((todo: HTMLLIElement) => {
    if (loading) return
    if (intObserver.current) intObserver.current.disconnect()
    intObserver.current = new IntersectionObserver(todos => {
      if (todos[0].isIntersecting && hasNextPage) {
        setPage(prevPage => prevPage + 1)
      }
    })
    if (todo) intObserver.current.observe(todo)
  }, [loading, hasNextPage])

  return (
    <>
      <StyledHeader>
        <span>x</span> 
      </StyledHeader>
      <StyledWrapper>
        <StyledList>
          {todos.map((item: ITodo, i: number) => {
            if (todos.length === i + 1) return <Todo key={item.id} todo={item} ref={lastNode}/>
            return <Todo key={item.id} todo={item}/>
          })}
          {loading && <h2>Loading...</h2>}
          {error && <h2>Error: {errorMessage} <br /> Restart page</h2>}
        </StyledList>
      </StyledWrapper>
    </>
  )
}

export default App
