import { ComponentBasePropsWithChildren } from "../../utils/interface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../module/store";
import { useEffect } from "react";
import { parseDate } from "../../utils/date";
import { setSelectedDate } from "../../module/gumjournals/slice";
import useCreateLocalSQLDB from "../../utils/hook/useCreateLocalSQLDB";

export default ({ children }: ComponentBasePropsWithChildren) => {
  const dispatch = useDispatch<AppDispatch>();

  // useGetGumjournals();

  useCreateLocalSQLDB();

  useEffect(() => {
    dispatch(setSelectedDate(Date.now()));
  }, []);

  return <>{children}</>;
};
