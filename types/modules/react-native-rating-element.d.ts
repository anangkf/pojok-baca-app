declare module 'react-native-rating-element' {
  interface RNRatingElementProps {
    /**
     * Represents Initial value for the rating.
     */
    rated?: number;
    /**
     * Number of background stars to show. For ex. Rated 5 out of 10 stars. The 10 value is `totalCount`
     */
    totalCount?: number;
    /**
     * If you want custom images, then pass `custom` as prop value.
     * In case of `custom`, Make sure to pass `selectedIconImage` and `emptyIconImage`.
     */
    type?: string;
    /**
     * Pass in custom path for selected icon. For ex. `selectedIconImage={require('../pathToImage/image.png}`.
     */
    selectedIconImage?: React.ReactNode;
    /**
     * Pass in custom path for selected icon. For ex. `emptyIconImage={require('../pathToImage/image.png}`.
     */
    emptyIconImage?: React.ReactNode;
    /**
     * If passed true, `onIconTap` event won't be fired.
     */
    readonly?: boolean;
    /**
     * Pass any value from `["row", "row-reverse", "column", "column-reverse"]`.
     */
    direction?: string;
    /**
     * On press of star icon by user, this function will be invoked with `position` paramter. For ex. when user taps on 4 rating, this function will be invoked and in `position` parameter you will get value 4. Please note: This won't be triggered if `readonly` is passed as true.
     */
    onIconTap?: () => void;
    /**
     * Pass in a custom color to fill-color the rating icon.
     */
    ratingColor?: string;
    /**
     * Pass in a custom fill-color for the background of rating icon. It is sometimes referred as empty icon.
     */
    ratingBackgroundColor?: string;
    /**
     * Pass in a custom font size for the icon
     */
    size?: number;
    /**
     * Pass in a custom text for the icon. For ex. 'beer', 'bulb'. These icons are imported from package [`react-native-vector-icons`](https://oblador.github.io/react-native-vector-icons/). Please Note: For now this package only support Ionicons
     */
    icon?: string;
    /**
     * Pass in custom number to manage space or margin between the rating icons.
     */
    marginBetweenRatingIcon?: number;
  }

  export function Rating(props: RNRatingElementProps): JSX.Element
}