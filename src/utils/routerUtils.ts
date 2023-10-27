import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Credits: undefined;
  BinaryConverter: undefined;
  OctalConverter: undefined;
  DecimalConverter: undefined;
  HexaConverter: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, "Details">;
type ProfilesScreenNavigationProp = StackNavigationProp<RootStackParamList, "Credits">;
type BinaryConverterScreensNavigationProp = StackNavigationProp<RootStackParamList, "BinaryConverter">;
type OctalConverterScreensNavigationProp = StackNavigationProp<RootStackParamList, "OctalConverter">;
type DecimalConverterScreensNavigationProp = StackNavigationProp<RootStackParamList, "DecimalConverter">;
type HexaConverterScreensNavigationProp = StackNavigationProp<RootStackParamList, "HexaConverter">;

export {
  RootStackParamList,
  HomeScreenNavigationProp,
  DetailsScreenNavigationProp,
  ProfilesScreenNavigationProp,
  BinaryConverterScreensNavigationProp,
  OctalConverterScreensNavigationProp,
  DecimalConverterScreensNavigationProp,
  HexaConverterScreensNavigationProp,
};
