import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions";
import "./Pagination.css";
const Pagination = (props) => {
  const { width } = useWindowDimensions();
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <FiArrowLeft
          className={classnames("fi left", {
            disabled: currentPage === 1,
          })}
        />
        Previous {width > 600 && "Page"}
      </li>
      <div className="pagiantion-number-wrapper">
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <li key={pageNumber} className="pagination-item dots">
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={pageNumber}
              className={classnames("pagination-item", {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
      </div>

      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        Next  {width > 600 && "Page"}
        <FiArrowRight
          className={classnames("fi right", {
            disabled: currentPage === 1,
          })}
        />
      </li>
    </ul>
  );
};

export default Pagination;
