import React, { useState } from 'react';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SliderBox } from 'react-native-image-slider-box';
// import FastImage from 'react-native-fast-image';

import { Logo } from '../../components/Logo';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';

import {
  Container,
  Header,
  Content,
  BedroomHeader,
  Name,
  Price,
  PriceContainer,
  Description,
  ItensTitle,
  Items,
  Item,
  ItemName,
  Footer,
} from './styles';

import example from '../../assets/bedroom-example.png';

import { useTheme } from 'styled-components';
import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export function BedroomDetails() {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  const { navigate } = useNavigation();

  function handleToScheduling() {
    navigate('Scheduling');
  }

  return (
    <Container>
      <StatusBar style="dark" translucent backgroundColor="transparent" />

      <Header
        from={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          type: 'timing',
          duration: 1000,
        }}
      >
        <BackButton />

        <Logo color={colors.primary} />
      </Header>

      <Content
        from={{
          opacity: 0,
          transform: [
            {
              translateX: width * 0.25,
            },
          ],
        }}
        animate={{
          opacity: 1,
          transform: [
            {
              translateX: 0,
            },
          ],
        }}
        transition={{
          type: 'timing',
          duration: 1000,
        }}
      >
        <SliderBox
          // ImageComponent={FastImage}
          onCurrentImagePressed={(item) => console.log(item)}
          images={[example, example, example]}
          inactiveDotColor={colors.light}
          dotColor={colors.secondary}
          activeOpacity={1}
          imageLoadingColor={colors.secondary}
          style={{
            height: 250,
            width: '100%',
          }}
        />

        <BedroomHeader>
          <Name>Suite X</Name>

          <PriceContainer>
            <MaterialIcons name="attach-money" size={24} color={colors.success} />
            <Price>1200,00</Price>
          </PriceContainer>
        </BedroomHeader>

        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Description>

        <ItensTitle>Esse quarto inclui</ItensTitle>

        <Items>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Item key={item}>
              <Feather name="wifi" size={24} color={colors.primary} />
              <ItemName>Wifi</ItemName>
            </Item>
          ))}
        </Items>
      </Content>

      <Footer
        from={{
          opacity: 0,
          transform: [
            {
              translateY: width * 0.25,
            },
          ],
        }}
        animate={{
          opacity: 1,
          transform: [
            {
              translateY: 0,
            },
          ],
        }}
        transition={{
          type: 'timing',
          duration: 1000,
        }}
      >
        <Button onPress={handleToScheduling} title="Reservar agora" />
      </Footer>
    </Container>
  );
}
