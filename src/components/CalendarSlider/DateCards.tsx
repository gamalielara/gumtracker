import React, { useEffect, useRef } from "react";
import { FlatList, ScrollView } from "react-native";
import { DateCard, DateDayText, DateText } from "./styles";
import { format } from "date-fns";
import { CalendarDateInfo } from "./interface";

interface IProps {
  datesInfo: CalendarDateInfo[];
}

const DateCards: React.FC<IProps> = ({ datesInfo }) => {
  const dateCardsFlatListRef = useRef<ScrollView>(null);

  useEffect(() => {
    dateCardsFlatListRef.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
  }, [datesInfo[0].date]);

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
          <DateCard hasBeenFilled={dateInfo.hasBeenFilled}>
            <DateDayText>{format(dateInfo.date, "EEE")}</DateDayText>
            <DateText>{format(dateInfo.date, "d")}</DateText>
          </DateCard>
        )}
      />
    </ScrollView>
  );
};

export default React.memo(DateCards);
