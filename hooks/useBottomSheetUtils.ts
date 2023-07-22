import { BottomSheetModal, useBottomSheetDynamicSnapPoints } from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef } from 'react';

/**
 * compatible for bottom sheet with dynamic snap points
*/
// const useBottomSheetUtils = (snapPoints: Array<number | string>): useBottomSheetUtils => {
const useBottomSheetUtils = (snapPoints: Array<number | string>) => {
  const initialSnapPoints = useMemo(() => snapPoints, []);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const handleModalPresentPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const handleModalDismissPress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  return {
    bottomSheetRef,
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
    handleModalPresentPress,
    handleModalDismissPress
  };

};

export default useBottomSheetUtils;