import { ComponentBasePropsWithChildren } from "../../utils/interface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../module/store";
import { useEffect } from "react";
import { parseDate } from "../../utils/date";
import { setSelectedDate } from "../../module/gumjournals/slice";
import useCreateLocalSQLDB from "../../utils/hook/useCreateLocalSQLDB";
import { format } from "date-fns";
import { APP_DATE_FORMAT } from "../../utils/const";

export default ({ children }: ComponentBasePropsWithChildren) => {
  const dispatch = useDispatch<AppDispatch>();

  // useGetGumjournals();

  useCreateLocalSQLDB();

  useEffect(() => {
    dispatch(setSelectedDate(format(Date.now(), APP_DATE_FORMAT)));
  }, []);

  return <>{children}</>;
};
