import { StyleSheet } from 'react-native';


module.exports = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
  },
  item: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  headerImage: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  headerMainText: {
    textAlign: 'center',
    fontSize: 14,
  },
  headerSubText: {
    textAlign: 'center',
    fontSize: 12,
  }
});
