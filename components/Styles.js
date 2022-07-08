import { StyleSheet } from "react-native";
import themes from "./themes";

const styles = StyleSheet.create({
  tittle: {
    paddingBottom: 60,
    fontSize: 60,
    color: themes.colors.secundaryColor,
    fontWeight: "bold",
    fontFamily: themes.fonts.primaryFont,
  },
  container: {
    height: "100%",
    backgroundColor: themes.colors.backgroundColor,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
  },
  containerTimerButton: {
    paddingBottom: 100,
  },
  textButton: {
    color: themes.colors.white,
    fontFamily: themes.fonts.primaryFont,
    alignSelf: "center",
  },
  button: {
    backgroundColor: themes.colors.primaryColor,
    borderRadius: 5,
    padding: 20,
    margin: 10,
  },
  digits: {
    fontSize: 100,
    marginLeft: 28,
    color: themes.colors.white,
  },
  timer: {
    borderColor: themes.colors.secundaryColor,
    borderWidth: 10,
    border: 10,
    width: 300,
    height: 300,
    backgroundColor: themes.colors.primaryColor,
    borderRadius: 150,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  days: {
    color: themes.colors.white,
    fontFamily: themes.fonts.primaryFont,
    alignSelf: "flex-end",
    marginBottom: 30,
    fontWeight: "bold",
  },
  diffTimer: {
    fontWeight: "bold",
    color: themes.colors.white,
    fontFamily: themes.fonts.primaryFont,
    fontSize: 30,
  },
});

export default styles;
