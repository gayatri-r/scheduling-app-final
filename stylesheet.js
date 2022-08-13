import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  outlineButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    width: '100%',
    borderRadius: 5,
    borderColor: '#009688',
    borderWidth: 1,
  },
  fillButtonHalf: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: '47%',
    borderRadius: 5,
    backgroundColor: '#009688',
  },
  fillButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#009688',
  },
  textButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: '37%',
    borderRadius: 5,
  },
  text1: {
    fontSize: 13,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#009688',
    fontFamily: 'Roboto'
  },
  text2: {
    fontSize: 13,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
    fontFamily: 'Roboto'
  },
  label: {
    fontSize: 11,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: 'black',
    fontFamily: 'Roboto'
  },
  normal: {
    fontSize: 17,
    lineHeight: 30,
    paddingHorizontal: 3,
    letterSpacing: 0.25,
    color: 'black',
    fontFamily: 'Roboto'
  },
  dateDash: {
    fontSize: 15,
    lineHeight: 37,
    paddingHorizontal: 4,
    letterSpacing: 0.25,
    color: '#009688',
    fontFamily: 'Roboto'
  },
  regular: {
    padding: 20,
    backgroundColor : "white"
  },
  fixToText: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  dateInput: {
    borderColor: '#009688',
    borderBottomWidth: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    textAlign: 'center',
    width: '20%'
  },
  input: {
    paddingTop: 10,
    fontSize: 16,
    textAlignVertical: 'top',
    borderColor: '#009688',
    borderBottomWidth: 1,
    backgroundColor: '#f5f5f5',
    paddingBottom: 10,
    paddingVertical: 10,
    width: '100%'
  },
  separator: {
    marginVertical: 7,
  },
});

export default styles;