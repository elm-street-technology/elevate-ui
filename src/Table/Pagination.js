import React, { Component } from "react";
import classnames from "classnames";
import withStyles from "react-jss";
import Button from "../Button";
import CaretLeft from "../Icon/CaretLeft";
import CaretRight from "../Icon/CaretRight";

class Pagination extends Component {
  constructor(props) {
    super();

    this.getSafePage = this.getSafePage.bind(this);
    this.changePage = this.changePage.bind(this);
    this.applyPage = this.applyPage.bind(this);

    this.state = {
      page: props.page,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ page: nextProps.page });
  }

  getSafePage(page) {
    if (Number.isNaN(page)) {
      page = this.props.page;
    }
    return Math.min(Math.max(page, 0), this.props.pages - 1);
  }

  changePage(page) {
    page = this.getSafePage(page);
    this.setState({ page });
    if (this.props.page !== page) {
      this.props.onPageChange(page);
    }
  }

  applyPage(e) {
    if (e) {
      e.preventDefault();
    }
    const page = this.state.page;
    this.changePage(page === "" ? this.props.page : page);
  }

  render() {
    const {
      canPrevious,
      canNext,
      className,
      classes,
      filterable,
      onShowFilters,
      onHideFilters,
      page,
      showFilters,
    } = this.props;
    return (
      <div
        className={classnames(classes.root, className)}
        style={this.props.style}
      >
        {filterable && (
          <Button
            className={classes.filterButton}
            color="secondary"
            isOutlined
            onClick={!showFilters ? onShowFilters : onHideFilters}
          >
            <span>{!showFilters ? "Show" : "Hide"} Filters</span>
          </Button>
        )}
        <div className={classes.buttons}>
          <button
            type="button"
            title="Previous Page"
            className={classes.button}
            onClick={() => {
              if (!canPrevious) return;
              this.changePage(page - 1);
            }}
            disabled={!canPrevious}
          >
            <CaretLeft width={16} height={16} />
          </button>
          <button
            type="button"
            title="Next Page"
            className={classes.button}
            onClick={() => {
              if (!canNext) return;
              this.changePage(page + 1);
            }}
            disabled={!canNext}
          >
            <CaretRight width={16} height={16} />
          </button>
        </div>
      </div>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    padding: "5px 8px",
    borderBottom: `1px solid ${theme.colors.gray200}`,
  },
  filterButton: {
    padding: "4px 6px",
  },
  buttons: {
    marginLeft: "12px",

    "& > * + *": {
      marginLeft: "6px",
    },
  },
  button: {
    display: "inline-flex",
    color: theme.colors.gray600,
    padding: "6px",
    border: `1px solid ${theme.colors.gray300}`,
    borderRadius: theme.globalBorderRadius,

    "&:disabled": {
      opacity: 0.25,
    },
  },
}))(Pagination);
