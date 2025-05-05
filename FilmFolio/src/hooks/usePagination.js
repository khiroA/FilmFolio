import { useState, useMemo } from "react";

const usePagination = (items = [], pageSize = 12) => {
  const [page, setPage] = useState(1);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(items.length / pageSize)),
    [items.length, pageSize]
  );

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, page, pageSize]);

  if (page > totalPages) {
    setPage(1);
  }

  return { pageItems, page, setPage, totalPages };
};

export default usePagination;
