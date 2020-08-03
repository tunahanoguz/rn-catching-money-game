import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  timeText: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 6,
  },
  moneyRow: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  moneyColumn: {
    width: 100,
    height: 100,
  },
  moneyImage: {
    width: 100,
    height: 100,
  },
});

export default styles;
