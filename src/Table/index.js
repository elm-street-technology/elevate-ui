import React from "react";
import classNames from "classnames";
import withStyles from "react-jss";
import ReactTable from "react-table";

// Export a ref to the ReactTable component in case a component needs access
export let TableRef;

// Wraps ReactTable component `withStyles` and overrides default styling
// https://github.com/react-tools/react-table#js-styles
const Table = ({ classes, ...rest }) => (
  <ReactTable
    ref={(r) => {
      TableRef = r;
    }}
    showPagination={false} // temporary until styles
    getProps={() => ({
      className: classes.root,
    })}
    getTableProps={() => ({
      className: classes.table,
    })}
    getTheadProps={() => ({
      className: classes.thead,
    })}
    getTheadTrProps={() => ({
      className: classNames(classes.thead_tr, classes.tr),
    })}
    getTheadThProps={() => ({
      className: classNames(classes.thead_th, classes.th),
    })}
    getTheadGroupProps={() => ({
      className: classes.thead_group,
    })}
    getTheadGroupTrProps={() => ({
      className: classes.thead_group_tr,
    })}
    getTheadGroupThProps={() => ({
      className: classes.thead_group_th,
    })}
    getTheadFilterProps={() => ({
      className: classes.thead_filter,
    })}
    getTheadFilterTrProps={() => ({
      className: classes.thead_filter_tr,
    })}
    getTheadFilterThProps={() => ({
      className: classes.thead_filter_th,
    })}
    getTbodyProps={() => ({
      className: classes.tbody,
    })}
    getTrGroupProps={() => ({
      className: classes.tr_group,
    })}
    getTrProps={() => ({
      className: classes.tr,
    })}
    getThProps={() => ({
      className: classes.th,
    })}
    getTdProps={() => ({
      className: classes.td,
    })}
    getTfootProps={() => ({
      className: classes.tfoot,
    })}
    getTfootTrProps={() => ({})}
    getTfootThProps={() => ({})}
    getPaginationProps={() => ({
      className: classes.pagination,
    })}
    getLoadingProps={() => ({})}
    getNoDataProps={() => ({})}
    getResizerProps={() => ({})}
    {...rest}
  />
);

export default withStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    background: theme.colors.white,
    border: `1px solid ${theme.colors.gray200}`,
    borderRadius: theme.globalBorderRadius,

    "& a[href]": {
      color: theme.colors.secondary,
      textDecoration: "none",
    },
    "& a[href]:hover": {
      color: theme.colors.secondaryDark,
    },
  },
  table: {
    flex: "auto 1",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    width: "100%",
    borderCollapse: "collapse",
    overflow: "auto",
  },
  thead: {
    flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
    userSelect: "none",
  },
  thead_tr: {
    flex: "1 0 auto",
    display: "inline-flex",
    borderBottom: `1px solid ${theme.colors.gray200}`,
  },
  thead_th: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "18px 18px",
    backgroundPosition: "right 8px center",
    "&.-cursor-pointer": {
      cursor: "pointer",
    },
    "&.-sort-asc": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="%23888f96" d="M12.66,3.32l4.16,5.33A.83.83,0,0,1,16.16,10H7.84a.83.83,0,0,1-.66-1.35l4.16-5.33A.84.84,0,0,1,12.66,3.32Z"/></svg>')`,
    },
    "&.-sort-desc": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="%23888f96" d="M11.34,20.68,7.18,15.35A.83.83,0,0,1,7.84,14h8.32a.83.83,0,0,1,.66,1.35l-4.16,5.33A.84.84,0,0,1,11.34,20.68Z"/></svg>')`,
    },
  },
  thead_group: {},
  thead_group_tr: {},
  thead_group_th: {},
  thead_filter: {
    borderBottom: `1px solid ${theme.colors.gray200}`,
  },
  thead_filter_tr: {},
  thead_filter_th: {},
  tbody: {
    flex: "99999 1 auto",
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
  },
  tr_group: {
    flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    borderBottom: `1px solid ${theme.colors.gray200}`,

    "&:last-child": {
      borderBottom: "0",
    },
  },
  tr: {
    flex: "1 0 auto",
    display: "inline-flex",
  },
  th: {
    flex: "1 0 0",
    fontWeight: "600",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    padding: "12px 8px",
    transition: "0.3s ease",
    transitionProperty: "width, min-width, padding, opacity",
    "&.-hidden": {
      width: "0 !important",
      minWidth: "0 !important",
      padding: "0 !important",
      border: "0 !important",
      opacity: "0 !important",
    },
  },
  td: {
    flex: "1 0 0",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    padding: "12px 8px",
    transition: "0.3s ease",
    transitionProperty: "width, min-width, padding, opacity",
    "&.-hidden": {
      width: "0 !important",
      minWidth: "0 !important",
      padding: "0 !important",
      border: "0 !important",
      opacity: "0 !important",
    },
  },
  tfoot: {
    flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
  },
  pagination: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    padding: "8px",
  },
}))(Table);
