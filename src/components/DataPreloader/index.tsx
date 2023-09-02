import { ComponentBasePropsWithChildren } from "../../utils/interface";
import useGetGumjournals from "../../utils/hook/useGetGumjournals";

export default ({ children }: ComponentBasePropsWithChildren) => {
  useGetGumjournals();

  return <>{children}</>;
};
