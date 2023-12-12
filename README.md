<div align="center">
  <img src="https://www.ayetstudios.com/wp-content/uploads/2017/05/ayetstudios_logo_03-200x49-1.png" width="300" height="73"/>
  <br/>
</div>
<br/>

# AyeT Studios React Native Example App

<br/>

Simple react native android example application using [ayetstudios-react-native-sdk](https://github.com/ayetstudios/ayetstudios-react-native-sdk) package.

Exampe implementation of:
- AyetOfferwall

### Screenshots
<br/>
<p float="left">
  <img src="https://user-images.githubusercontent.com/48547524/247898432-89fe0203-e2ce-4249-bed9-486c46c0d0aa.jpg" width="100" />
  <img src="https://user-images.githubusercontent.com/48547524/247898412-a534defa-7be5-4376-9dc5-9c052b17609c.jpg" width="100" /> 
</p>

### SDK implementation

Pass your systems user identifier as userId [string|number] and adslotId from your ayeT Studios Dashboard.


Include ayetstudios sdk

```javascript
import {AyetOfferwall} from 'ayetsdk';
```

Call offerwall

```javascript
 <AyetOfferwall userId="12345" adslotId="536" onClose={onClose} />
```

```javascript
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
} from 'react-native';
import {AyetOfferwall} from 'ayetsdk';
import {NavigationContainer} from '@react-navigation/native';

const Offerwall = ({navigation}) => {
  const onClose = () => {
    navigation.navigate('Home');
  };

  return <AyetOfferwall userId="12345" adslotId="536" onClose={onClose} />;
};

export default Offerwall;
```
