import { useState } from "react";

const usePageNumber = (total: number, width: number) => {
  const [pageNumber, setPageNumber] = useState(1);
  const PAGE_LIMIT: number = width > 700 ? 8 : 2;
  const numberOfPages: number = Math.ceil(total / PAGE_LIMIT);
  const lastIndex: number = pageNumber * PAGE_LIMIT;
  const startIndex: number = lastIndex - PAGE_LIMIT;

  return [
    pageNumber,
    setPageNumber,
    numberOfPages,
    startIndex,
    lastIndex,
  ] as const;
};

export default usePageNumber;
