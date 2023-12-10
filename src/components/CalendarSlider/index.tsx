import { Container, MonthContainer, MonthText } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import CommonContext from "../../module/common";
import { TouchableOpacity } from "react-native";
import { addDays, format, lastDayOfMonth } from "date-fns";
import DateCards from "./DateCards";
import { CalendarDateInfo } from "./interface";
import useGetGumtrackerLocalDatabase from "../../utils/hook/useGetGumtrackerLocalDatabase";

const CalendarSlider = () => {
  const [month, setMonth] = useState<string>();

  const filledDateList = useGetGumtrackerLocalDatabase.getAllDates();

  const now = useRef<Date>(new Date());

  const { colorScheme } = useContext(CommonContext);

  useEffect(() => {
    const month = format(now.current.getTime(), "LLLL y");

    setMonth(month);
  }, []);

  const onPrevMonthClicked = () => {
    const prevMonth = now.current.setDate(0);
    const prevMonthName = format(prevMonth, "LLLL y");

    now.current = new Date(prevMonth);

    setMonth(prevMonthName);
  };

  const onNextMonthClicked = () => {
    const nextMonth = now.current.setDate(32);
    const nextMonthName = format(nextMonth, "LLLL y");

    now.current = new Date(nextMonth);

    setMonth(nextMonthName);
  };

  const thisMonthDatesArr = useMemo(() => {
    const firstDateOfMonth = new Date(format(now.current, "yyyy-MM-01"));
    const lastDayOfThisMonth = addDays(lastDayOfMonth(now.current), 1);

    const dateArrs: CalendarDateInfo[] = [];

    let current = firstDateOfMonth;

    do {
      const date = {
        date: new Date(current).getTime(),
        hasBeenFilled: false,
      };
      const currentDateFormatted = format(current, "yyyy-MM-dd");

      if (filledDateList.includes(currentDateFormatted))
        date.hasBeenFilled = true;

      dateArrs.push(date);

      current = addDays(new Date(current), 1);
    } while (current < lastDayOfThisMonth);

    return dateArrs;
  }, [month]);

  return (
    <Container>
      <MonthContainer>
        <TouchableOpacity onPress={onPrevMonthClicked}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            color={colorScheme.text}
            size={18}
          />
        </TouchableOpacity>
        <MonthText>{month}</MonthText>
        <TouchableOpacity onPress={onNextMonthClicked}>
          <FontAwesomeIcon
            icon={faChevronRight}
            color={colorScheme.text}
            size={18}
          />
        </TouchableOpacity>
      </MonthContainer>
      <DateCards datesInfo={thisMonthDatesArr} />
    </Container>
  );
};

export default CalendarSlider;
