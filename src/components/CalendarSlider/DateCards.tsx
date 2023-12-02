// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import React, { useEffect, useRef } from "react";
import { FlatList } from "react-native";
import { DateCard, DateDayText, DateText } from "./styles";
import { format, getDate } from "date-fns";
import { CalendarDateInfo, DateVariant } from "./interface";
import { parseDate } from "../../utils/date";
import { useDispatch, useSelector } from "react-redux";
import { getGumjournalsSelectedDate } from "../../module/gumjournals/selectors";
import { AppDispatch } from "../../module/store";
import { setSelectedDate } from "../../module/gumjournals/slice";

interface IProps {
  datesInfo: CalendarDateInfo[];
}

const DateCards: React.FC<IProps> = ({ datesInfo }) => {
  const selectedDate = useSelector(getGumjournalsSelectedDate);
  const dispatch = useDispatch<AppDispatch>();

  const dateCardsFlatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const indexToScroll = datesInfo.indexOf(
      datesInfo.filter(
        (date) => getDate(date.date) === getDate(new Date(selectedDate)),
      )[0],
    );
    dateCardsFlatListRef.current?.scrollToIndex({
      index: indexToScroll,
      animated: true,
    });
  }, []);

  const decideDateCardVariant = (dateInfo: CalendarDateInfo) => {
    const dateInfoEpoch = new Date(dateInfo.date).getTime();
    if (parseDate(dateInfoEpoch) === selectedDate) return DateVariant.SELECTED;

    if (dateInfo.hasBeenFilled) return DateVariant.HAS_BEEN_FILLED;

    return DateVariant.NONE;
  };

  const onDateSelected = (selectedDateInfo: Date) => () => {
    const dateInfoEpoch = new Date(selectedDateInfo).getTime();
    dispatch(setSelectedDate(parseDate(dateInfoEpoch)))
  };

  return (
    <FlatList
      ref={dateCardsFlatListRef}
      horizontal={true}
      data={datesInfo}
      getItemLayout={(data, index) => ({
        length: 30,
        offset: 59 * index,
        index,
      })}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item: dateInfo }) => (
        <DateCard
          variant={decideDateCardVariant(dateInfo)}
          onPress={onDateSelected(dateInfo.date)}
        >
          <DateDayText>{format(dateInfo.date, "EEE")}</DateDayText>
          <DateText>{format(dateInfo.date, "d")}</DateText>
        </DateCard>
      )}
    />
  );
};

export default DateCards;
