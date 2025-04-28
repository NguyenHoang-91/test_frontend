import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // Generate page numbers to display (1, 2, 3, ..., totalPages)
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center items-center gap-4 my-6">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Previous
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-3 py-1 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
