// Wraps ReactTable component `withStyles` and overrides default styling
// https://github.com/react-tools/react-table#js-styles
import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "../withStyles";
import ReactTable from "react-table";

import FilterComponent from "./FilterComponent";
import Pagination from "./Pagination";

/*
 * The <Table /> component extends React-Table with an opinionated default configuration and styles.
 */
class Table extends Component {
  state = {
    showFilters: false,
  };

  onHideFilters = () => {
    this.setState({
      showFilters: false,
    });
  };

  onShowFilters = () => {
    this.setState({
      showFilters: true,
    });
  };

  render() {
    const { classes, ...rest } = this.props;
    const { showFilters } = this.state;
    return (
      <ReactTable
        ref={(r) => {
          this.innerTable = r;
        }}
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
          style: { display: showFilters ? "block" : "none" },
        })}
        getTheadFilterTrProps={() => ({
          className: classes.thead_filter_tr,
        })}
        getTheadFilterThProps={() => ({
          className: classes.thead_filter_th,
          tabIndex: "",
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
        getLoadingProps={() => ({
          className: classes.loading,
        })}
        getNoDataProps={() => ({})}
        getResizerProps={() => ({
          className: classes.resizer,
        })}
        defaultFilterMethod={(filter, row) => {
          const id = filter.pivotId || filter.id;
          return row[id] !== undefined
            ? String(row[id])
                .toLowerCase()
                .includes(filter.value.toLowerCase())
            : true;
        }}
        FilterComponent={FilterComponent}
        PaginationComponent={Pagination}
        getPaginationProps={() => ({
          showFilters,
          onHideFilters: this.onHideFilters,
          onShowFilters: this.onShowFilters,
        })}
        showPaginationTop
        showPaginationBottom={false}
        {...rest}
      />
    );
  }
}

const styles = (theme) => ({
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
    backgroundPosition: "right 4px center",
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
    flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
    userSelect: "none",
  },
  thead_filter_tr: {
    flex: "1 0 auto",
    display: "flex",
    borderBottom: `1px solid ${theme.colors.gray200}`,
  },
  thead_filter_th: {
    flex: "1 0 0",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    padding: "4px 8px",
  },
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
    position: "relative",
    flex: "1 0 0",
    color: theme.colors.gray800,
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "600",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    padding: "10px 8px",
    transition: "0.3s ease",
    transitionProperty: "width, min-width, padding, opacity",

    "&:focus": {
      outline: `1px dotted ${theme.colors.gray400}`, // Modify default focus glow
      outlineOffset: "-4px",
    },

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
    fontSize: "16px",
    lineHeight: "20px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    padding: "10px 8px",
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
  loading: {
    display: "block",
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    background: "rgba(255, 255, 255, 0.8)",
    transition: "all 0.3s ease",
    zIndex: theme.zIndex["tableLoading"],
    opacity: "0",
    pointerEvents: "none",

    "&.-active": {
      opacity: "1",
      zIndex: theme.zIndex["tableLoadingActive"],
      pointerEvents: "all",

      "& > div": {
        transform: "translateY(50%)",
      },
    },

    "& > div": {
      position: "absolute",
      display: "block",
      textAlign: "center",
      width: "100%",
      top: "50%",
      left: "0",
      fontSize: "14px",
      color: "rgba(0, 0, 0, 0.6)",
      transform: "translateY(-52%)",
      transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    },
  },
  resizer: {
    display: "inline-block",
    position: "absolute",
    width: "24px",
    top: "0",
    bottom: "0",
    right: "-12px",
    cursor: "col-resize",
    userSelect: "none",
    zIndex: theme.zIndex["tableResizer"],
  },
});

export default withStyles(styles, { name: "EuiTable" })(Table);
