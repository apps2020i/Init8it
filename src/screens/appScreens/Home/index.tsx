import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';
import {getAllData} from '../../../../Database';
import {appState, setBusinessList} from '../../../redux/app/appSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useLazyFetchBusinessListQuery} from '../../../services/appServices';
import {doIfOnline} from '../../../helpers/utils';
import Header from '../../../components/header/Header';
import {navigate} from '../../../navigation/rootNavigation';
import {useHomeStyle} from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const [fetchBusList] = useLazyFetchBusinessListQuery();
  const styles = useHomeStyle();
  const reduxBusinessList = useSelector(
    (state: {apps: appState}) => state.apps.businessList,
  );
  const sectionList = reduxBusinessList[0]?.Sections;

  useEffect(() => {
    const fetchData = async () => {
      await apisLocalMathods();
    };
    fetchData();
  }, []);

  const callLocalDatas = async () => {
    const data = await getAllData('businessList');
    dispatch(setBusinessList(data));
  };
  const callAllApis = async () => {
    await fetchBusList();
  };
  const apisLocalMathods = async () => {
    await callAllApis();
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.touch}
        onPress={() => {
          navigate('Details', {
            questionList: item,
          });
        }}>
        <Text style={styles.secName}>{item?.SectionName}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Header title="HOME PAGE" />
      <TouchableOpacity
        style={styles.dummyBtn}
        onPress={() => setisCallApi(true)}>
        <Text style={styles.hit}>HIT</Text>
      </TouchableOpacity>
      <FlatList
        data={sectionList}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
export default Home;
