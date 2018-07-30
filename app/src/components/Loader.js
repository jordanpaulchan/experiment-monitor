import Loadable from "react-loadable";
import { Loading } from "./loading/Loading";

export const Loader = route =>
  Loadable({
    loader: () => import(`${route}`),
    loading: Loading
  });
