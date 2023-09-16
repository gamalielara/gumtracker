import React, { useCallback, useContext, useEffect, useRef } from "react";
import { FlatList, ScrollView } from "react-native";
import { DateCard, DateDayText, DateText } from "./styles";
import { format } from "date-fns";
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

  const dateCardsFlatListRef = useRef<ScrollView>(null);

  useEffect(() => {
    dateCardsFlatListRef.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
  }, [datesInfo[0].date]);

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
    <ScrollView
      ref={dateCardsFlatListRef}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <FlatList
        horizontal={true}
        data={datesInfo}
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
    </ScrollView>
  );
};

export default DateCards;
