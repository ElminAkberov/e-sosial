import { useState } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from 'lucide-react';

import Button from '../Button';

export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const renderPageNumbers = () => {
        const pages = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);

            if (currentPage > 3) {
                pages.push('...');
            }

            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                if (i !== 1 && i !== totalPages) {
                    pages.push(i);
                }
            }

            if (currentPage < totalPages - 2) {
                pages.push('...');
            }

            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div className="flex items-center gap-1 text-[13px]">
            <Button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="w-8 h-8 max-md:w-7 max-md:h-7 flex items-center justify-center rounded-lg border border-[#F1F1F1] bg-white text-[#333333] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                <ChevronsLeft size={18} />
            </Button>

            <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-8 h-8 max-md:w-7 max-md:h-7 flex items-center justify-center rounded-lg border border-[#F1F1F1] bg-white text-[#333333] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                <ChevronLeft size={18} />
            </Button>

            {renderPageNumbers().map((page, index) =>
                page === '...' ? (
                    <Button
                        key={`ellipsis-${index}`}
                        className={`w-8 h-8 max-md:w-7 max-md:h-7 flex items-center justify-center rounded-lg font-semibold transition-colors border border-[#F1F1F1] bg-white text-gray-700 hover:bg-gray-50`}
                    >
                        {page}
                    </Button>
                ) : (
                    <Button
                        key={page}
                        onClick={() => handlePageChange(+page)}
                        className={`w-8 h-8 max-md:w-7 max-md:h-7 flex items-center justify-center rounded-lg font-semibold transition-colors ${
                            currentPage === page
                                ? 'bg-[#1B3E77] text-white'
                                : 'border border-[#F1F1F1] bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                        {page}
                    </Button>
                ),
            )}

            <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-8 h-8 max-md:w-7 max-md:h-7 flex items-center justify-center rounded-lg border border-[#F1F1F1] bg-white text-[#333333] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                <ChevronRight size={18} />
            </Button>

            <Button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="w-8 h-8 max-md:w-7 max-md:h-7 flex items-center justify-center rounded-lg border border-[#F1F1F1] bg-white text-[#333333] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                <ChevronsRight size={18} />
            </Button>
        </div>
    );
}
