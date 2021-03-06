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
  primaryButton: {
    backgroundColor: themes.colors.primaryButton,
    borderRadius: 20,
    padding: 15,
    margin: 30,
  },
  container: {
    height: "100%",
    backgroundColor: themes.colors.backgroundColor,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
  },
  containerTimerButton: {
    marginTop: 10,
    paddingBottom: 50,
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
    borderWidth: 4,
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
  badgeLabel: {
    fontWeight: "bold",
    fontSize: 25,
    color: themes.colors.black,
  },
  badgeText: {
    fontSize: 13,
    color: themes.colors.white,
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
    borderWidth: 8,
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
