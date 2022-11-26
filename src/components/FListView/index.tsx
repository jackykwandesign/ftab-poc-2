import React, {
    Fragment,
    ReactNode,
    useCallback,
    useEffect,
    useState,
} from 'react'

export interface FPaginationProps {
    pageSize?: number
}
const usePagination = (params?: FPaginationProps) => {
    const { pageSize: defaultPageSize = 25 } = params ?? {}
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(defaultPageSize)
    const [totalRecords, setTotalRecords] = useState(0)
    const [totalPages, setTotalPages] = useState(1)

    const goToPage = (targetPage: number) => {
        if (targetPage > totalPages) {
            throw new Error('PAGE_EXIST_LIMIT')
        }
        setPage(targetPage)
    }

    const handleSetPageSize = (_pageSize: number) => {
        if (_pageSize < 1) {
            throw new Error('PAGE_SIZE_MUST_GREATER_THEN_0')
        }
        setPageSize(_pageSize)
    }

    const handleSetTotalRecords = (_totalRecords: number) => {
        if (_totalRecords < 0) {
            throw new Error('TOTAL_RECORDS_MUST_GREATER_OR_EQUAL_TO_0')
        }
        setTotalRecords(_totalRecords)
    }

    const handleSetTotalPages = (_totalPages: number) => {
        if (_totalPages < 1) {
            throw new Error('TOTAL_PAGES_MUST_GREATER_OR_EQUAL_TO_1')
        }
        setTotalPages(_totalPages)
    }

    return {
        page,
        pageSize,
        totalPages,
        totalRecords,
        goToPage,
        setPageSize: handleSetPageSize,
        setTotalRecords: handleSetTotalRecords,
        setTotalPages: handleSetTotalPages,
    }
}

export interface ListViewProps<T = unknown> {
    isLoading?: boolean
    datas?: T[]
    onGetDataKey?: (data: T, index: number, datas: T[]) => string | number
    onRenderCard?: (data: T, index: number, datas: T[]) => ReactNode
    onLoadMore?: (page: number, pageSize: number) => void
    mode?: 'showAll' | 'loadMore'
    paginationProps?: FPaginationProps
}
const defaultRenderCard: ListViewProps['onRenderCard'] = (_data, index) => {
    return <div>{`data-${index}`}</div>
}
const defaultGetDataKey: ListViewProps['onGetDataKey'] = (_data, index) => {
    return index
}
function FListView<T>(props: ListViewProps<T>) {
    const {
        isLoading = false,
        datas = [],
        onGetDataKey = defaultGetDataKey,
        onRenderCard = defaultRenderCard,
        onLoadMore,
        mode = 'showAll',
        paginationProps = { pageSize: 25 },
    } = props
    const { page, pageSize, goToPage } = usePagination(paginationProps)

    const handleLoadMore = () => {
        goToPage(page + 1)
    }
    const handleLoadPaginatedData = useCallback(
        (page: number, pageSize: number) => {
            onLoadMore?.(page, pageSize)
        },
        [onLoadMore]
    )

    useEffect(() => {
        handleLoadPaginatedData(page, pageSize)
    }, [page, pageSize, handleLoadPaginatedData])

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}
        >
            {isLoading ?? <div>Loading</div>}
            {datas.map((data, index) => {
                const key = onGetDataKey?.(data, index, datas)
                return (
                    <Fragment key={key}>
                        {onRenderCard?.(data, index, datas)}
                    </Fragment>
                )
            })}

            {/* LoadMore / ShowAll Button */}
            {mode === 'loadMore' && (
                <button onClick={handleLoadMore}>LoadMore</button>
            )}
        </div>
    )
}

export default FListView
