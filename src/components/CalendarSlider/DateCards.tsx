import React, { useCallback, useContext, useEffect, useRef } from "react";
import { FlatList } from "react-native";
import { DateCard, DateDayText, DateText } from "./styles";
import { format, getDate } from "date-fns";
import { CalendarDateInfo, DateVariant } from "./interface";
import { TrackerContext } from "../../screens/TrackerForms/context";
import { parseDate } from "../../utils/date";

interface IProps {
  datesInfo: CalendarDateInfo[];
  selectedDate: string;
}

const DateCards: React.FC<IProps> = ({ datesInfo, selectedDate }) => {
  const trackerContext = useContext(TrackerContext);

  if (!trackerContext) return <>Loading...</>;

  const { setSelectedDate } = trackerContext;

  const selectedDateCallback = useCallback(setSelectedDate, []);

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
  }, [selectedDate]);

  const decideDateCardVariant = (dateInfo: CalendarDateInfo) => {
    const dateInfoEpoch = new Date(dateInfo.date).getTime();
    if (parseDate(dateInfoEpoch) === selectedDate) return DateVariant.SELECTED;

    if (dateInfo.hasBeenFilled) return DateVariant.HAS_BEEN_FILLED;

    return DateVariant.NONE;
  };

  const onDateSelected = (selectedDateInfo: Date) => () => {
    const dateInfoEpoch = new Date(selectedDateInfo).getTime();

    selectedDateCallback(parseDate(dateInfoEpoch));
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
