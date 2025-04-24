interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const maxVisiblePages = 5

    const getPageNumbers = () => {
        const pages = []
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
        let endPage = startPage + maxVisiblePages - 1

        if (endPage > totalPages) {
            endPage = totalPages
            startPage = Math.max(1, endPage - maxVisiblePages + 1)
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i)
        }

        return pages
    }

    return (
        <div className="flex items-center justify-center gap-1">
            {/* Previous Button */}
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                &lt;
            </button>

            {/* First Page */}
            {currentPage > Math.floor(maxVisiblePages / 2) + 1 && (
                <>
                    <button
                        onClick={() => onPageChange(1)}
                        className={`px-3 py-1 rounded ${1 === currentPage ? 'bg-green-600 text-white' : 'border border-gray-300'}`}
                    >
                        1
                    </button>
                    {currentPage > Math.floor(maxVisiblePages / 2) + 2 && (
                        <span className="px-2">...</span>
                    )}
                </>
            )}

            {/* Page Numbers */}
            {getPageNumbers().map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 rounded ${page === currentPage ? 'bg-green-600 text-white' : 'border border-gray-300'}`}
                >
                    {page}
                </button>
            ))}

            {/* Last Page */}
            {currentPage < totalPages - Math.floor(maxVisiblePages / 2) && (
                <>
                    {currentPage < totalPages - Math.floor(maxVisiblePages / 2) - 1 && (
                        <span className="px-2">...</span>
                    )}
                    <button
                        onClick={() => onPageChange(totalPages)}
                        className={`px-3 py-1 rounded ${totalPages === currentPage ? 'bg-green-600 text-white' : 'border border-gray-300'}`}
                    >
                        {totalPages}
                    </button>
                </>
            )}

            {/* Next Button */}
            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                &gt;
            </button>
        </div>
    )
}