import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import CustomLoadingCircular from '../components/CustomLoadingCircular';
import HorizontalSpacer from '../components/HorizontalSpacer';
import ItemBox from '../components/ItemBox';
import PressableIcon from '../components/PressableIcon';

const Home = () => {
    const [activeMenu, setActiveMenu] = useState(0);
    const [isLoad, setIsLoad] = useState(false);
    const [items, setItems] = useState([]);

    const loadData = () => {
        axios.get("https://run.mocky.io/v3/f216b47d-c4da-4e49-8f71-4f914c522a2e", {})
        .then((res) => {
            setIsLoad(false);
            setItems(res.data.items);
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        return () => {};
    },[]);

    const renderFoods = (currentIndex) => {
        setIsLoad(true);
        setActiveMenu(currentIndex);
        loadData();
    }

    const isActiveIndex = (index) => {
        return activeMenu === index ? "#E2E2E2" : "transparent";
    }

    const foods = items.length !== 0 ? items.map((f, i) => {
        return <ItemBox item={f.productName} key={f.productID} uri={f.productImage}/>
    }) : null;

    return(
        <View style={style.container}>
            <View style={style.menuContainer}>
                <PressableIcon                
                    iconName="restaurant"
                    iconSize={32}
                    iconColor="red"
                    backgroundColor={isActiveIndex(0)}
                    onIconPress={() => renderFoods(0)}/>
                <HorizontalSpacer width={"15%"}/>
                <PressableIcon 
                    iconName="wine"
                    iconSize={32}
                    iconColor="lightblue"
                    backgroundColor={isActiveIndex(1)}
                    onIconPress={() => renderFoods(1)}/>
                <HorizontalSpacer width={"15%"}/>
                <PressableIcon 
                    iconName="ice-cream"
                    iconSize={32}
                    iconColor="pink"
                    backgroundColor={isActiveIndex(2)}
                    onIconPress={() => renderFoods(2)}/>
            </View>
            { isLoad === true ? 
                <View style={{alignItems: "center", flex: 1, justifyContent: "center"}}>
                    <CustomLoadingCircular fill={100} />
                </View>
                :
                <SafeAreaView style={style.itemsContainer}>
                    <ScrollView contentContainerStyle={style.contentContainerStyle} style={style.scrollView}>
                        <View style={style.items}>
                            {foods}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            }
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    menuContainer: {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "center",
        paddingBottom: 15,
        paddingTop: 15,
        backgroundColor: "white",
        margin: 20,
        borderRadius: 6,
        shadowColor: "black",
        elevation: 8,
    },
    itemsContainer: {
        borderRadius: 8,
    },
    scrollView: {
        marginHorizontal: 20,
    },
    contentContainerStyle: {
        alignItems: "center",
        justifyContent: "center",
    },
    items:{
        paddingTop: 10,
        alignSelf: "stretch",
    }
});

export default Home;