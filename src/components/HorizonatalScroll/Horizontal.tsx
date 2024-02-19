import React, { useEffect, useRef, useState } from 'react'
import { Animated, Image, Text, View } from 'react-native'
import styles from './Style'
import { Dimensions } from 'react-native';
import Data from '../../views/ImageSlider/Data/Data';
interface IHorizontal {
    image: any,
    name: string,
    price: string,
    brand: string,
    weight: string,
    index: number,
    ScrollValue: any,
    ScrollVal: any
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Horizontal: React.FC<IHorizontal> = ({ image, index, ScrollValue, }: IHorizontal) => {
    // const [Name, setName] = useState<string>("Cricket");
    // const [Price, setPrice] = useState<string>("1000");
    // const animeHeight = useRef(new Animated.Value(0)).current;
    const animScale = useRef(new Animated.Value(1)).current;
    // const [same, setSame] = useState<boolean>(false);
    // const animeOpacity = animeHeight.interpolate({
    //     inputRange: [0, 100],
    //     outputRange: [0, 1],
    // });

    // function handleDetails() {
    //     setTimeout(() => {
    //         // setName(Data[ScrollValue].name);
    //         // setPrice(Data[ScrollValue].price);
    //         if (ScrollValue == 0) {
    //             setName("Cricket");
    //             setPrice("9999");
    //         }
    //         else if (ScrollValue == 1) {
    //             setName("FootBall");
    //             setPrice("8888");
    //         }
    //         else if (ScrollValue == 2) {
    //             setName("VolleyBall");
    //             setPrice("7777");
    //         }
    //     }, 2000)
    // }
    // useEffect(() => { handleBottom(); handleDetails() }, [ScrollValue]);
    // useEffect(() => {
    //     Animated.timing(animeHeight, {
    //         toValue: 100,
    //         duration: 1000,
    //         useNativeDriver: false,
    //     }).start();
    // }, []);
   
    // function handleBottom() {
    //     if (animeHeight) {
    //         Animated.sequence(
    //             [Animated.timing(animeHeight, {
    //                 toValue: 0,
    //                 duration: 2000,
    //                 useNativeDriver: false,
    //             }),
    //             Animated.timing(animeHeight, {
    //                 toValue: 100,
    //                 duration: 2000,
    //                 useNativeDriver: false,
    //             })]).start();

    //     }

    // }
    useEffect(
        () => {
            if (index == ScrollValue) {
                // setSame(true);
                Animated.timing(animScale, {
                    toValue: 1.5,
                    duration: 1000,
                    useNativeDriver: true
                }).start()
            }
            else if (index != ScrollValue) {
                Animated.timing(animScale, {
                    toValue: 1,
                    duration: 10,
                    useNativeDriver: true
                }).start()
            };
            // handleBottom(); handleDetails()
        }
        , [ScrollValue]);

    const animatedStyle = {
        transform: [{
            scale: animScale
        }],

    }

    return (
        <View style={{ height: windowHeight }}>
            <View style={{ width: windowWidth, padding: 20 }}>
                <View style={[{ padding: 60, backgroundColor: '#E6E6E6', borderRadius: 40 }]}>
                    <Animated.Image source={image} style={[{ alignSelf: 'center', height: 100, width: 100 }, animatedStyle]} />
                </View>
            </View>
            {/* <Animated.View style={[styles.bottom, { height: animeHeight, opacity: animeOpacity }]}>
                <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: '500', color: 'red' }}>
                    Name: {Name}
                </Text>
                <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: '500', color: 'red' }}>
                    Price:  Rs.{Price}
                </Text>
            </Animated.View> */}
        </View>
    )
}

export default Horizontal;