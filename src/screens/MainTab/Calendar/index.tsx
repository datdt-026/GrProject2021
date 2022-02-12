import {addDays, format} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Agenda, AgendaEntry} from 'react-native-calendars';
import testIDs from './testIDs';

export type Item = {
  name: string;
  cookies: boolean;
  title: string;
  body: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const App: React.FC = () => {
  const [items, setItems] = useState<{[key: string]: Post[]}>({});

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'https://61a718ea8395690017be94dc.mockapi.io/Calendar',
      );
      const data: Post[] = await response.json();

      const mappedData = data.map((post, index) => {
        const date = addDays(new Date(), index);

        return {
          ...post,
          date: format(date, 'yyyy-MM-dd'),
        };
      });

      const reduced = mappedData.reduce(
        (acc: {[key: string]: Post[]}, currentItem) => {
          const {date, ...coolItem} = currentItem;

          acc[date] = [coolItem];

          return acc;
        },
        {},
      );

      setItems(reduced);
    };

    getData();
  }, []);

  const loadItems = day => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
        }
      }
      const newItem = {};
      Object.keys(items).forEach(key => {
        newItem[key] = items[key];
      });
      setItems(newItem);
    }, 1000);
  };

  const renderItem = (
    item: Item,
    reservation: AgendaEntry,
    isFirst: boolean,
  ) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          testID={testIDs.agenda.ITEM}
          style={[styles.item, {height: reservation.height}]}
          onPress={() => Alert.alert(item.body)}>
          <Text>{item.title}</Text>
          <Text>{item.body}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Agenda
        loadItemsForMonth={loadItems}
        items={items}
        renderItem={renderItem}
        theme={{
          agendaTodayColor: '#6574CF',
          agendaKnobColor: '#6574CF',
        }}
      />
    </SafeAreaView>
    //#6574CF
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

//lỗi update thêm ngày
