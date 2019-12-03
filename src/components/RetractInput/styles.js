import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  line: {
    color: '#fff',
    paddingTop: 3,
    paddingBottom: 3,
  },
  cell: {
    paddingLeft: 5,
    fontSize: 16,
  },
  label: {
    fontWeight: 'bold',
    flex: 1,
    textDecorationLine: 'underline',
    paddingBottom: 6,
  },
  content: {
    flex: 3,
  },
  collapsed: {
    maxHeight: 60,
  },
  expanded: {
    flex: 1,
  },
});

export default styles;
