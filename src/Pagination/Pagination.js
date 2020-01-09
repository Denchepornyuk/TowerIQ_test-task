import React from 'react';
import cn from 'classnames';
import PropsTypes from 'prop-types';

const Pagination = ({ total, currentPage, perPage, changePage }) => {
  const buttons = Math.ceil(total / perPage);

  const handlerChangePage = (event) => {
    const newPage = event.target.textContent;

    switch (newPage) {
      case 'Next':
        changePage(currentPage + 1 > buttons ? buttons : currentPage + 1);
        break;
      case 'Prev':
        changePage(currentPage - 1 < 1 ? 1 : currentPage - 1);
        break;
      default:
        changePage(+newPage);
    }
  };

  return (
    <div className="table__pagination">
      <button
        className="pagination__button"
        type="button"
        onClick={handlerChangePage}
      >
        Prev
      </button>
      {Array(buttons).fill('').map((button, index) => (
        <button
          type="button"
          className={`pagination__button
          ${cn({ selectButton: index + 1 === currentPage })}`}
          onClick={handlerChangePage}
        >
          {index + 1}
        </button>
      ))}
      <button
        type="button"
        onClick={handlerChangePage}
        className="pagination__button"
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  total: PropsTypes.number.isRequired,
  currentPage: PropsTypes.number.isRequired,
  perPage: PropsTypes.number.isRequired,
  changePage: PropsTypes.func.isRequired,
};

export default Pagination;
