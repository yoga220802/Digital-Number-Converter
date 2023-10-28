import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Credits: undefined;
  BinaryConverter: undefined;
  OctalConverter: undefined;
  DecimalConverter: undefined;
  HexaConverter: undefined;

  DaB: undefined;
  DaH: undefined;
  DaO: undefined;
  HaB: undefined;
  OaB: undefined;
  oah: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, "Details">;
type ProfilesScreenNavigationProp = StackNavigationProp<RootStackParamList, "Credits">;
type BinaryConverterScreensNavigationProp = StackNavigationProp<RootStackParamList, "BinaryConverter">;
type OctalConverterScreensNavigationProp = StackNavigationProp<RootStackParamList, "OctalConverter">;
type DecimalConverterScreensNavigationProp = StackNavigationProp<RootStackParamList, "DecimalConverter">;
type HexaConverterScreensNavigationProp = StackNavigationProp<RootStackParamList, "HexaConverter">;
type DaBScreensNavigationProp = StackNavigationProp<RootStackParamList, "DaB">;
type DaHScreensNavigationProp = StackNavigationProp<RootStackParamList, "DaH">;
type DaOScreensNavigationProp = StackNavigationProp<RootStackParamList, "DaO">;
type HaBScreensNavigationProp = StackNavigationProp<RootStackParamList, "HaB">;
type OaBScreensNavigationProp = StackNavigationProp<RootStackParamList, "OaB">;
type oahScreensNavigationProp = StackNavigationProp<RootStackParamList, "oah">;

export {
  RootStackParamList,
  HomeScreenNavigationProp,
  DetailsScreenNavigationProp,
  ProfilesScreenNavigationProp,
  BinaryConverterScreensNavigationProp,
  OctalConverterScreensNavigationProp,
  DecimalConverterScreensNavigationProp,
  HexaConverterScreensNavigationProp,
  DaBScreensNavigationProp,
  DaHScreensNavigationProp,
  DaOScreensNavigationProp,
  HaBScreensNavigationProp,
  OaBScreensNavigationProp,
  oahScreensNavigationProp,
};
