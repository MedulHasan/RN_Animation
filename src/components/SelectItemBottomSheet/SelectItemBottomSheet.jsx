import React, { memo, useState, useEffect  } from "react";
import { FlatList } from "react-native";
import CustomBottomSheet from "../CustomBottomSheet/CustomBottomSheet";
import SelectSingleItem from "./SelectSingleItem";
import CustomActiveIndicator from "../CustomLoader/CustomActiveIndicator";
import SearchBar from "./SearchBar";

const SelectItemBottomSheet = ({
    snapPoint = [300, 500],
    selectRef,
    data,
    name,
    loading = false,
    isHeaderComponent,
    onPress,
}) => {
    const [newData, setNewData] = useState(data);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const searchValue = data.filter((item) => {
            const list = item?.name?.toString() || item?.order_key;
            const res = list?.toLowerCase()?.includes(searchText.toLowerCase());
            return res;
        });
        setNewData(searchValue);
    }, [searchText, data]);

    if (loading) {
        <CustomActiveIndicator />;
    }

    return (
        <CustomBottomSheet
            bsRef={selectRef}
            snapPoint={snapPoint}
            isScrollable={true}
            isHeaderComponent={isHeaderComponent}
            headerComponent={
                <SearchBar
                    name={name}
                    searchText={searchText}
                    setSearchText={setSearchText}
                />
            }
        >
            <FlatList
                data={newData}
                renderItem={({ item }) => (
                    <SelectSingleItem
                        selectRef={selectRef}
                        item={item}
                        onPress={onPress}
                        name={name}
                    />
                )}
                keyExtractor={(_, key) => `bs${key}`}
            />
        </CustomBottomSheet>
    );
};

export default memo(SelectItemBottomSheet);
