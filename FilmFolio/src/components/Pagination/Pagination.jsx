import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = ({ page, totalPages, onPageChange }) => {


  const maxAllowedPages = 500;
  const calculatedPageCount = Math.min(totalPages, maxAllowedPages);

  return (
    <div className="pagination">
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={calculatedPageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        forcePage={page - 1} 
        onPageChange={(selectedItem) => onPageChange(selectedItem.selected + 1)}
        containerClassName={'pagination'}
        pageClassName={'page-btn'}
        activeClassName={'active'}
        previousClassName={'page-btn'}
        nextClassName={'page-btn'}
        disabledClassName={'disabled'}
      />
    </div>
  );
};

export default Pagination;
