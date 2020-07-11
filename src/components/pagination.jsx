import React, { useRef, useCallback } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize) || 1;

  const left = getLeft(currentPage, pagesCount);
  const right = getRight(currentPage, pagesCount, left);

  // if (pagesCount === 1) return null;
  const pages = _.range(left, right + 1);

  let hrefLink = "#";

  return (
    <div className="pagination my-3">
      <nav>
        <ul className="pagination">
          <li
            className={currentPage === 1 ? "page-item disabled" : "page-item"}
            style={{ cursor: "pointer" }}
          >
            <a
              className="page-link"
              onClick={() => onPageChange(currentPage - 1)}
              href={hrefLink}
            >
              <span aria-hidden="true">&#60;</span>
            </a>
          </li>
          {pages.map((page) => (
            <li
              key={page}
              style={{ cursor: "pointer" }}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                className="page-link"
                onClick={() => onPageChange(page)}
                href={hrefLink}
              >
                {page}
              </a>
            </li>
          ))}
          <li
            style={{ cursor: "pointer" }}
            className={
              currentPage === pagesCount ? "page-item disabled" : "page-item"
            }
          >
            <a
              className="page-link"
              onClick={() => onPageChange(currentPage + 1)}
              href={hrefLink}
            >
              <span aria-hidden="true">&#62;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;

function getLeft(currentPage, pagesCount) {
  if (currentPage <= 2) return 1;

  if (currentPage > 3 && pagesCount - currentPage < 2) {
    return pagesCount - currentPage === 1 ? currentPage - 3 : currentPage - 4;
  }

  return currentPage - 2;
}

function getRight(currentPage, pagesCount, left) {
  if (left <= 2) {
    if (pagesCount >= left + 4) return left + 4;
    return pagesCount;
  }

  if (pagesCount - currentPage >= 2) {
    return currentPage + 2;
  }

  return pagesCount;
}
