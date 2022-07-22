import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const OrderDelivery = () => {
  const destinationMarker = () => {
    <Marker>
      <View
        style={{
          height: 50,
          width: 50,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
        }}></View>
    </Marker>;
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 17.491659,
          longitude: 78.391983,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {destinationMarker()}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '75%',
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default OrderDelivery;
