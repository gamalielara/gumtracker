import { ComponentBasePropsWithChildren } from "../../utils/interface";
import useGetGumjournals from "../../utils/hook/useGetGumjournals";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../module/store";
import { useEffect } from "react";
import { parseDate } from "../../utils/date";
import { setSelectedDate } from "../../module/gumjournals/slice";

export default ({ children }: ComponentBasePropsWithChildren) => {
  const dispatch = useDispatch<AppDispatch>()

  useGetGumjournals();

  useEffect(() => {
    const today = parseDate(Date.now())
    dispatch(setSelectedDate(today))
  }, []);

  return <>{children}</>;
};
