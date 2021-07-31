import { useState, useCallback } from 'react';
var usePagination = function (initialPerPage) {
    var _a = useState(1), page = _a[0], setPage = _a[1];
    var _b = useState(initialPerPage ? initialPerPage : 25), perPage = _b[0], setPerPage = _b[1];
    var _c = useState(0), arrayPage = _c[0], setArrayPage = _c[1];
    var changePageEvent = useCallback(function (event, number) {
        setPage(number + 1);
        setArrayPage(number);
    }, []);
    var changePage = useCallback(function (page) {
        setPage(page);
        setArrayPage(page - 1);
    }, []);
    var changePerPageEvent = useCallback(function (e) {
        setPerPage(parseInt(e.target.value));
        setPage(1);
        setArrayPage(0);
    }, []);
    var changePerPage = useCallback(function (perPage) {
        setPerPage(perPage);
        setPage(1);
        setArrayPage(0);
    }, []);
    return { page: page, changePageEvent: changePageEvent, perPage: perPage, changePerPageEvent: changePerPageEvent, changePage: changePage, arrayPage: arrayPage, changePerPage: changePerPage };
};
export default usePagination;
