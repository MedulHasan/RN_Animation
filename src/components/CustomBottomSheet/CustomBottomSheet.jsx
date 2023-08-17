import React, { useCallback, useMemo, memo } from "react";
import BottomSheet, {
    BottomSheetBackdrop,
    useBottomSheetSpringConfigs,
    BottomSheetHandle,
    useBottomSheetDynamicSnapPoints,
    BottomSheetFlatList,
} from "@gorhom/bottom-sheet";
import { bottomSheetStyles } from "./bottomSheet.style";

const CustomBottomSheet = ({
    style = {},
    bsRef,
    snapPoint = [180],
    bgColor = '#FFFFFF',
    indicatorColor,
    children,
    isScrollable = false,
    isHeaderComponent = false,
    headerComponent,
}) => {
    const initialSnapPoints = useMemo(
        () => ["CONTENT_HEIGHT", ...snapPoint],
        [snapPoint]
    );

    const {
        animatedHandleHeight,
        animatedSnapPoints,
        animatedContentHeight,
        handleContentLayout,
    } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

    const bottomSheetStyle = bottomSheetStyles(indicatorColor, bgColor);

    const renderBackdrop = useCallback((props) => {
        return (
            <BottomSheetBackdrop
                {...props}
                appearsOnIndex={0}
                disappearsOnIndex={-1}
                opacity={0.2}
            />
        );
    }, []);

    const animationConfigs = useBottomSheetSpringConfigs({
        damping: 80,
        overshootClamping: true,
        restDisplacementThreshold: 0.1,
        restSpeedThreshold: 0.1,
        stiffness: 700,
    });
    const renderBottomSheetHandle = () => {
        return (
            <BottomSheetHandle
                indicatorStyle={bottomSheetStyle.bottomSheetIndicator}
            />
        );
    };

    const handleChange = (index) => {};

    return (
        <BottomSheet
            onChange={handleChange}
            ref={bsRef}
            index={-1}
            enablePanDownToClose={true}
            backdropComponent={renderBackdrop}
            animationConfigs={animationConfigs}
            handleComponent={renderBottomSheetHandle}
            backgroundStyle={bottomSheetStyle.bottomSheet}
            snapPoints={!isScrollable ? animatedSnapPoints : snapPoint}
            handleHeight={!isScrollable && animatedHandleHeight}
            contentHeight={!isScrollable && animatedContentHeight}
        >
                {isHeaderComponent &&
                    typeof headerComponent == "object" &&
                    headerComponent}
                <BottomSheetFlatList
                    keyboardShouldPersistTaps="always"
                    onLayout={!isScrollable && handleContentLayout}
                    contentContainerStyle={[
                        bottomSheetStyle.contentContainer,
                        style,
                    ]}
                    ListHeaderComponent={() => <>{children}</>}
                    scrollEnabled={true}
                />
        </BottomSheet>
    );
};

export default memo(CustomBottomSheet);
