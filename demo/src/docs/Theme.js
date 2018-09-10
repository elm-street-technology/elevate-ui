import React from "react";
import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";

const Theme = ({ classes, className, theme }) => (
  <Paper>
    <Typography type="title">{`<ThemeProvider />`}</Typography>
    <Typography type="body" style={{ marginBottom: "32px" }}>
      Elevate-UI uses React-JSS under the hood. The ThemeProvider documentation
      can be found here. https://github.com/cssinjs/theming#themeprovider
    </Typography>
    <Typography type="title">{`<Colors />`}</Typography>
    {theme &&
      theme.colors && (
        <div className={classes.grid}>
          {Object.keys(theme.colors).map((color) => (
            <div key={color} className={classes.color}>
              <div
                className={classes.colorSwatch}
                style={{ backgroundColor: theme.colors[color] }}
              />
              <div className={classes.colorDetails}>
                <div className={classes.colorName}>{color}</div>
                <div className={classes.colorHex}>{theme.colors[color]}</div>
              </div>
            </div>
          ))}
        </div>
      )}
  </Paper>
);

export default withStyles((theme) => ({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 128px)",
    gridColumnGap: "32px",
    gridRowGap: "32px",
  },
  color: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "128px",
    height: "172px",
    backgroundColor: "#fff",
    padding: "6px",
    border: `1px solid ${theme.colors.gray300}`,
  },
  colorSwatch: {
    width: "114px",
    height: "114px",
  },
  colorDetails: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    textAlign: "right",
    padding: "0 4px",
  },
  colorName: {
    lineHeight: "1.4",
    fontWeight: "600",
  },
  colorHex: {
    lineHeight: "1.4",
    fontSize: "14px",
  },
}))(Theme);
