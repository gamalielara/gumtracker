import React from "react";
import { FlatList, ScrollView } from "react-native";
import { DateCard, DateDayText, DateText } from "./styles";
import { format } from "date-fns";

interface IProps {
  dates: Date[];
}

const DateCards: React.FC<IProps> = ({ dates }) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <FlatList
        horizontal={true}
        data={dates}
        renderItem={({ item: date }) => (
          <DateCard>
            <DateDayText>{format(date, "EEEEE")}</DateDayText>
            <DateText>{format(date, "d")}</DateText>
          </DateCard>
        )}
      />
    </ScrollView>
  );
};

export default React.memo(DateCards);
