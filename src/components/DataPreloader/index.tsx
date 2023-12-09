import { ComponentBasePropsWithChildren } from "../../utils/interface";
import useGetGumjournals from "../../utils/hook/useGetGumjournals";
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
    const today = parseDate(Date.now());
    dispatch(setSelectedDate(today));
  }, []);

  return <>{children}</>;
};
