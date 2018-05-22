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
      minWidth: 240,
    },
    {
      Header: "Animal",
      accessor: "animal",
      minWidth: 160,
    },
    {
      Header: "Food",
      accessor: "food",
      minWidth: 160,
    },
    {
      Header: "Start Date",
      accessor: "startDate",
      minWidth: 120,
    },
  ];
  const data = [
    {
      id: 1,
      name: "Chris Hamburger",
      animal: "Cat",
      food: "Pizza",
      startDate: "2018-01-20",
    },
    {
      id: 2,
      name: "Jason Welsh",
      animal: "Red Panda",
      food: "Swedish Fish",
      startDate: "2016-05-09",
    },
    {
      id: 3,
      name: "Matt Lordey",
      animal: "Cat",
      food: "Steak",
      startDate: "2016-05-02",
    },
    {
      id: 4,
      name: "Eric Vindaughter",
      animal: "Panda",
      food: "Pho",
      startDate: "2016-05-16",
    },
    {
      id: 5,
      name: "Ashley Fog",
      animal: "Red Fox",
      food: "Buffalo Chicken",
      startDate: "2016-05-09",
    },
    {
      id: 6,
      name: "Maximiliano Corporation",
      animal: "Star Fox",
      food: "Paella",
      startDate: "2016-09-01",
    },
    {
      id: 7,
      name: "Chase Jamaica",
      animal: "Coyote",
      food: "Tuna Maki",
      startDate: "2018-01-20",
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
        actions={[
          {
            title: "Log selection",
            callback: (selection) => {
              console.log(selection);
            },
          },
        ]}
      />
    </Paper>
  );
};

export default Tables;
