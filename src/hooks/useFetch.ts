import { useEffect, useState } from "react";
import { getDataForPage } from "../api/axios";

import { ITodo } from "../components/App";

export default function useFetch(pageNumber: number) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const controller = new AbortController();
    const { signal } = controller;

    getDataForPage(pageNumber, { signal })
      .then((data) => {
        setTodos((prevTodos) => [...prevTodos, ...data]);
        setHasNextPage(Boolean(data.length));
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        if (signal.aborted) return;
        setError(true);
        setErrorMessage(e.message);
      });

    return () => controller.abort();
  }, [pageNumber]);

  return { loading, error, errorMessage, todos, hasNextPage };
}
