import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, SafeAreaView, Text, View } from 'react-native'
import Horizontal from '../../components/HorizonatalScroll/Horizontal';
import { FlatList } from 'react-native';
import Data from './Data/Data';
import styles from './Style/Style';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Slider = () => {
  const [Name, setName] = useState<string>("Cricket");
  const [Price, setPrice] = useState<string>("1000");
  const FLatListRef=useRef(null);
  const animeHeight = useRef(new Animated.Value(0)).current;
//   const animeOpacity = animeHeight.interpolate({
//     inputRange: [0, 100],
//     outputRange: [0, 1],
// });
function handleDetails() {
  setTimeout(() => {
      // setName(Data[ScrollValue].name);
      // setPrice(Data[ScrollValue].price);
      if (ScrollIndex == 0) {
          setName("Cricket");
          setPrice("9999");
      }
      else if (ScrollIndex == 1) {
          setName("FootBall");
          setPrice("8888");
      }
      else if (ScrollIndex == 2) {
          setName("VolleyBall");
          setPrice("7777");
      }
  }, 500)
}

function handleBottom() {
  if (animeHeight) {
      Animated.sequence(
          [Animated.timing(animeHeight, {
              toValue: 0,
              duration: 500,
              useNativeDriver: false,
          }),
          Animated.timing(animeHeight, {
              toValue: 100,
              duration: 500,
              useNativeDriver: false,
          })]).start();

  }

}



     const [ScrollVal,setScrollVal]=useState<number>();
     const [ScrollIndex,setScrollIndex]=useState<number>();
    function renderItem(item:any){
        return(
            <Horizontal ScrollVal={ScrollVal} image={item.item.image} name={item.item.name} price={item.item.price} brand={item.item.brand} index={item.index} weight={item.item.weight} ScrollValue={ScrollIndex}/>
        )
    }
    useEffect(
      ()=>{
        handleDetails();
      handleBottom();
      }
      ,[ScrollIndex])
  return (
    <View style={{height:windowHeight}} >
        <FlatList 
        pagingEnabled={true}
        ref={FLatListRef}
        data={Data} 
        renderItem={renderItem}
        horizontal={true}
        onScroll={(e)=>{
          const X=e.nativeEvent.contentOffset.x;
          const SrcollIdx=parseInt((X/Dimensions.get('window').width).toFixed(0));
          // console.log("Type Of ScrollIdx::",typeof(SrcollIdx));
          setScrollIndex(SrcollIdx);
          setScrollVal(X);
        }}
        showsHorizontalScrollIndicator={false}
        />

            <Animated.View style={[styles.bottom, { height: animeHeight, opacity:1 }]}>
                <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: '500', color: 'red' }}>
                    Name: {Name}
                </Text>
                <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: '500', color: 'red' }}>
                    Price:  Rs.{Price}
                </Text>
            </Animated.View>

    </View>
  )
}

export default Slider