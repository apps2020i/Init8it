import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';
import {getAllData} from '../../../../Database';
import {appState, setBusinessList} from '../../../redux/app/appSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useLazyFetchBusinessListQuery} from '../../../services/appServices';
import {doIfOnline} from '../../../helpers/utils';
import Header from '../../../components/header/Header';
import {navigate} from '../../../navigation/rootNavigation';

const Home = () => {
  const dispatch = useDispatch();

  const [isCallApi, setisCallApi] = useState(true);
  const [fetchBusList] = useLazyFetchBusinessListQuery();
  const reduxBusinessList = useSelector(
    (state: {apps: appState}) => state.apps.businessList,
  );
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
    doIfOnline(
      async () => {
        await callLocalDatas();
      },
      async () => {
        if (isCallApi) {
          await callAllApis();
        } else {
          await callLocalDatas();
        }
      },
    );
  };

  const renderItem = ({item}) => {
    console.log('itemsare', item);
    const questions = item?.Questions;
    console.log('questfrohomeis', questions.length);

    return (
      <TouchableOpacity
        onPress={() => {
          console.log('qonpresis', questions);
          console.log('itemsare', item);
          navigate('Details', {
            questionList: item?.Questions,
          });
        }}
        style={{
          backgroundColor: '#fff',
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
          borderRadius: 8,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          {item?.SectionName}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f2f2f2',
      }}>
      <Header title="HOME PAGE" />
      <TouchableOpacity
        onPress={() => setisCallApi(true)}
        style={{
          position: 'absolute',
          top: 120,
          right: 20,
          height: 60,
          width: 60,
          alignItems: 'center',
          borderRadius: 100,
          backgroundColor: 'red',
          justifyContent: 'center',
          zIndex: 999,
        }}>
        <Text style={{fontSize: 22, color: 'white'}}>HIT</Text>
      </TouchableOpacity>
      <FlatList
        data={reduxBusinessList}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
export default Home;

// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';
// import Checkbox from '../../../../Checkbox';
// import {Picker} from '@react-native-picker/picker';
// import {useLoginStyle} from './styles';
// import {Database} from '../../../../Database';
// import {navigate} from '../../../navigation/rootNavigation';
// import {ROUTES} from '../../../constants/routeConstant';
// // const testingData = [
// //   {type: 'text', value: 'Hello, World!'},
// //   {type: 'textInput', placeholder: 'Enter your name'},
// //   {type: 'dropdown', options: ['Option 1', 'Option 2', 'Option 3']},
// //   {type: 'image', source: require('../../../../testingImg.jpg')},
// //   {type: 'checkbox', label: 'Check me'},
// // ];

// const Home = () => {
//   const styles = useLoginStyle();

//   const renderItem = ({item}) => {
//     return (
//       <TouchableOpacity
//         onPress={() =>
//           navigate(ROUTES.details, {
//             details: item,
//           })
//         }
//         style={{
//           marginBottom: 10,
//           backgroundColor: '#EEEEEE',
//           height: 60,
//           justifyContent: 'center',
//         }}>
//         <Text style={{marginLeft: 20, fontSize: 16, fontWeight: 'bold'}}>
//           {item.SectionName}
//         </Text>
//       </TouchableOpacity>
//     );
//   };
//   return (
//     <View style={{flex: 1}}>
//       <View style={{height: 120, justifyContent: 'center'}}>
//         <Text style={{alignSelf: 'center', color: 'gray', fontWeight: 'bold'}}>
//           HEADER
//         </Text>
//       </View>
//       <FlatList
//         keyExtractor={item => item?.id}
//         data={Database}
//         contentContainerStyle={{paddingBottom: 30}}
//         renderItem={renderItem}
//       />
//     </View>

//     // <View style={styles}>
//     //   {testingData.map((requirement, index) => {
//     //     switch (requirement.type) {
//     //       case 'text':
//     //         return (
//     //           <Text key={index} style={styles.text}>
//     //             {requirement.value}
//     //           </Text>
//     //         );
//     //       case 'textInput':
//     //         return (
//     //           <TextInput
//     //             key={index}
//     //             style={styles.textInput}
//     //             placeholder={requirement.placeholder}
//     //           />
//     //         );
//     //       case 'dropdown':
//     //         return (
//     //           <Picker
//     //             key={index}
//     //             // style={pickerSelectStyles}
//     //             items={requirement?.options?.map(option => ({
//     //               label: option,
//     //               value: option,
//     //             }))}
//     //             onValueChange={value => console.log(value)}
//     //           />
//     //         );
//     //       case 'image':
//     //         return (
//     //           <Image
//     //             key={index}
//     //             style={styles.image}
//     //             source={requirement.source}
//     //           />
//     //         );
//     //       case 'checkbox':
//     //         return (
//     //           <Checkbox
//     //             key={index}
//     //             style={styles.checkbox}
//     //             onChange={() => {}}
//     //             label={requirement.label}
//     //           />
//     //         );
//     //       default:
//     //         return null;
//     //     }
//     //   })}
//     // </View>
//   );
// };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     padding: 16,
// //   },
// //   text: {
// //     fontSize: 16,
// //     marginBottom: 8,
// //   },
// //   textInput: {
// //     width: '100%',
// //     height: 40,
// //     borderWidth: 1,
// //     borderColor: 'gray',
// //     marginBottom: 8,
// //     paddingHorizontal: 8,
// //   },
// //   image: {
// //     width: 200,
// //     height: 200,
// //     marginBottom: 8,
// //   },
// //   checkbox: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 8,
// //   },
// // });

// // const pickerSelectStyles = StyleSheet.create({
// //   inputIOS: {
// //     width: '100%',
// //     height: 40,
// //     borderWidth: 1,
// //     borderColor: 'gray',
// //     marginBottom: 8,
// //     paddingHorizontal: 8,
// //   },
// //   inputAndroid: {
// //     width: '100%',
// //     height: 40,
// //     borderWidth: 1,
// //     borderColor: 'gray',
// //     marginBottom: 8,
// //     paddingHorizontal: 8,
// //   },
// // });

// export default Home;
