import React from 'react';
import './pagination.css';
 
const Pagination = ({handlePaginationClick, totalPages, page}) =>{
    return (
        <div className="Pagination">
            <button className="Pagination-button" 
            onClick={() => handlePaginationClick('previous')}
            disabled = {page ===1}
            
            >
            
                &larr;
            </button>

            <span className="Pagination-info"> {page}  of {totalPages}  </span>

            <button
                className="Pagination-button" onClick={()=> handlePaginationClick('next')}>
                &rarr;
            </button>
        </div>
    )
};


export default Pagination;