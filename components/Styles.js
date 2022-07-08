import { StyleSheet } from "react-native";
import themes from "./themes";

const styles = StyleSheet.create({
  tittle: {
    paddingBottom: 22,
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
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: themes.colors.primaryColor,
    borderRadius: 10,
    padding: 17,
    margin: 20,
    borderColor: themes.colors.secundaryColor,
    borderWidth: 2,
  },
  digits: {
    fontSize: 100,
    marginLeft: 28,
    color: themes.colors.white,
  },
  badge: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: 280,
    height: 70,
    backgroundColor: themes.colors.primaryColor,
    borderRadius: 10,
    borderColor: themes.colors.secundaryColor,
    borderWidth: 3,
  },
  badgeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: themes.colors.white,
    marginLeft: 30,
  },
  badgeImage: {
    width: 115,
    height: 115,
    borderRadius: 100,
    marginRight: -15,
    borderColor: themes.colors.secundaryColor,
    borderWidth: 3,
    backgroundColor: themes.colors.primaryColor,
  },
  timer: {
    borderColor: themes.colors.secundaryColor,
    borderWidth: 10,
    border: 10,
    width: 280,
    height: 280,
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
