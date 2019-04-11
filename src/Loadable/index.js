import ReactLoadable from "react-loadable";
import FullScreenLoader from "./FullScreenLoader";

const Loadable = (options) =>
  ReactLoadable({
    loading: FullScreenLoader,
    delay: 300,
    ...options,
  });

export default Loadable;
