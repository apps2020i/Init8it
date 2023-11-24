import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  title?: string;
  onBackPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({title, onBackPress}) => {
  return (
    <View style={[styles.header, {height: Platform.OS === 'ios' ? 100 : 60}]}>
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          {/* <Ionicons name="arrow-back" size={24} color="white" /> */}
          <Text>Back</Text>
        </TouchableOpacity>
      )}
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

Header.defaultProps = {
  title: '',
  onBackPress: undefined,
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3498db',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;
