import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e6e6",
    width: "100%",
    height: "100%",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  uiContainer: {
    height: "100%",
    justifyContent: "flex-end",
  },
  bottomContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  handle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },
  description: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "300",
    marginBottom: 10,
  },
  songRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: -5,
  },
  songName: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 5,
  },

  songImage: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "white",
  },
  songImage1: {
    width: 35,
    height: 35,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "white",
  },

  //  right container
  rightContainer: {
    alignSelf: "flex-end",
    height: 300,
    justifyContent: "space-between",
    marginRight: 10,
    marginBottom: -15,
  },

  iconContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  statsLabel: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 3,
  },
});
