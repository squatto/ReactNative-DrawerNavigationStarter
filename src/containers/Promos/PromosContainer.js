import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

class PromosContainer extends Component {
  handleDrawerPress = () => {
    this.props.navigation.navigate('DrawerToggle');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleDrawerPress}>
          <Text>Toggle Drawer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(state => ({
  loading: state.loading,
}))(PromosContainer);
