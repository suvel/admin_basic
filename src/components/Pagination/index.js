import React, { useEffect, useState } from "react";
import "./style.css";
import arrow from "../../asset/arrow.svg";
import ff_arrow from "../../asset/ff_arrow.svg";

const RoundButton = ({ children, selected, ...props }) => {
  return (
    <button className={`RoundButton ${selected ? "selected" : ""}`} {...props}>
      {" "}
      {children}
    </button>
  );
};

const maxRowPerPage = 10;
const startingPageNumber = 1;

const Pagination = ({ records, onPageChange }) => {
  const [curPage, setCurPage] = useState(1);

  const PageCount = Math.ceil(records.length / maxRowPerPage);
  const getPageNumber = () => {
    let pageNumber = [];
    for (let i = 1; i <= PageCount; i++) {
      pageNumber.push(i);
    }
    return pageNumber;
  };

  const handelNavigation = (navigationId) => {
    let newNavigationId = curPage;
    if (
      (navigationId == "nxt" && curPage >= PageCount) ||
      (navigationId == "prv" && curPage <= startingPageNumber)
    ) {
      return;
    } else if (navigationId == "nxt") {
      newNavigationId += 1;
    } else if (navigationId == "ff_nxt") {
      newNavigationId = PageCount;
    } else if (navigationId == "prv") {
      newNavigationId -= 1;
    } else if (navigationId == "ff_prv") {
      newNavigationId = startingPageNumber;
    } else {
      newNavigationId = navigationId;
    }
    setCurPage(newNavigationId);
    onPageChange(
      (newNavigationId - 1) * maxRowPerPage,
      maxRowPerPage * newNavigationId
    );
  };

  useEffect(() => {
    onPageChange(0, maxRowPerPage);
    setCurPage(1);
  }, [records]);

  return (
    <div className="Pagination">
      <RoundButton onClick={() => handelNavigation("ff_prv")}>
        <img src={ff_arrow} className="arrow arrow_left" />
      </RoundButton>
      <RoundButton onClick={() => handelNavigation("prv")}>
        <img src={arrow} className="arrow arrow_left" />
      </RoundButton>
      {getPageNumber().map((page) => {
        return (
          <RoundButton
            selected={page == curPage}
            onClick={() => handelNavigation(page)}
            key={page}
          >
            {page}
          </RoundButton>
        );
      })}
      <RoundButton onClick={() => handelNavigation("nxt")}>
        <img src={arrow} className="arrow arrow_right" />
      </RoundButton>
      <RoundButton onClick={() => handelNavigation("ff_nxt")}>
        <img src={ff_arrow} className="arrow arrow_right" />
      </RoundButton>
    </div>
  );
};

export default Pagination;
