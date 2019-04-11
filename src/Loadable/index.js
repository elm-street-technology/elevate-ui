import ReactLoadable from "react-loadable";
import FullscreenLoader from "./FullscreenLoader";

const Loadable = (options) =>
  ReactLoadable({
    loading: FullscreenLoader,
    delay: 300,
    ...options,
  });

export default Loadable;
