import React from "react";
import Paper from "elevate-ui/Paper";
import Table from "elevate-ui/Table";
import CheckboxTable from "elevate-ui/Table/CheckboxTable";
import Typography from "elevate-ui/Typography";

const Tables = () => {
  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Animal",
      accessor: "animal",
    },
    {
      Header: "Food",
      accessor: "food",
    },
    {
      Header: "Start Date",
      accessor: "startDate",
    },
  ];
  const data = [
    {
      id: 1,
      name: "Chris",
      animal: "Cat",
      food: "Pizza",
      startDate: "2018-01-20",
    },
    {
      id: 2,
      name: "Jason",
      animal: "Red Panda",
      food: "Swedish Fish",
      startDate: "2016-05-09",
    },
    {
      id: 3,
      name: "Matt",
      animal: "Cat",
      food: "Steak",
      startDate: "2016-05-02",
    },
    {
      id: 4,
      name: "Eric",
      animal: "Panda",
      food: "Pho",
      startDate: "2016-05-09",
    },
    {
      id: 5,
      name: "Ashley",
      animal: "Red Fox",
      food: "Buffalo Chicken",
      startDate: "2016-05-16",
    },
    {
      id: 6,
      name: "Maximiliano",
      animal: "Fox",
      food: "Paella",
      startDate: "2017-01-01",
    },
  ];

  return (
    <Paper>
      <Typography type="title">{`<Table />`}</Typography>
      <Typography type="body">
        The {`<Table />`} component extends{" "}
        <a
          href="https://react-table.js.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React-Table
        </a>{" "}
        with an opinionated default configuration and styling.
      </Typography>
      <Table
        data={data}
        columns={columns}
        defaultPageSize={10}
        filterable
        style={{ marginTop: "24px", marginBottom: "24px" }}
      />
      <Typography type="title">{`<CheckboxTable />`}</Typography>
      <CheckboxTable
        data={data}
        columns={columns}
        defaultPageSize={10}
        filterable
        style={{ marginTop: "24px" }}
      />
    </Paper>
  );
};

export default Tables;
