import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Credits: undefined;
  BinaryConverter: undefined;
  OctalConverter: undefined;
  DecimalConverter: undefined;
  HexaConverter: undefined;

  BtO: undefined;
  BtD: undefined;
  BtH: undefined;
  
  OtB: undefined;
  OtD: undefined;
  OtH: undefined;

  DtB: undefined;
  DtO: undefined;
  DtH: undefined;

  HtB: undefined;
  HtO: undefined;
  HtD: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, "Details">;
type ProfilesScreenNavigationProp = StackNavigationProp<RootStackParamList, "Credits">;
type BinaryConverterScreensNavigationProp = StackNavigationProp<RootStackParamList, "BinaryConverter">;
type OctalConverterScreensNavigationProp = StackNavigationProp<RootStackParamList, "OctalConverter">;
type DecimalConverterScreensNavigationProp = StackNavigationProp<RootStackParamList, "DecimalConverter">;
type HexaConverterScreensNavigationProp = StackNavigationProp<RootStackParamList, "HexaConverter">;
type BtOScreensNavigationProp = StackNavigationProp<RootStackParamList, "BtO">;
type BtDScreensNavigationProp = StackNavigationProp<RootStackParamList, "BtD">;
type BtHScreensNavigationProp = StackNavigationProp<RootStackParamList, "BtH">;

type OtBScreensNavigationProp = StackNavigationProp<RootStackParamList, "OtB">;
type OtDScreensNavigationProp = StackNavigationProp<RootStackParamList, "OtD">;
type OtHScreensNavigationProp = StackNavigationProp<RootStackParamList, "OtH">;

type DtBScreensNavigationProp = StackNavigationProp<RootStackParamList, "DtB">;
type DtOScreensNavigationProp = StackNavigationProp<RootStackParamList, "DtO">;
type DtHScreensNavigationProp = StackNavigationProp<RootStackParamList, "DtH">;

type HtBScreensNavigationProp = StackNavigationProp<RootStackParamList, "HtB">;
type HtOScreensNavigationProp = StackNavigationProp<RootStackParamList, "HtO">;
type HtDScreensNavigationProp = StackNavigationProp<RootStackParamList, "HtD">;

export {
  RootStackParamList,
  HomeScreenNavigationProp,
  DetailsScreenNavigationProp,
  ProfilesScreenNavigationProp,
  BinaryConverterScreensNavigationProp,
  OctalConverterScreensNavigationProp,
  DecimalConverterScreensNavigationProp,
  HexaConverterScreensNavigationProp,
  
  BtOScreensNavigationProp,
  BtDScreensNavigationProp,
  BtHScreensNavigationProp,
  
  OtBScreensNavigationProp,
  OtDScreensNavigationProp,
  OtHScreensNavigationProp,
  
  DtBScreensNavigationProp,
  DtOScreensNavigationProp,
  DtHScreensNavigationProp,
  
  HtBScreensNavigationProp,
  HtOScreensNavigationProp,
  HtDScreensNavigationProp,
};
