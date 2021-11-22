import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';

import { format, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Calendar, DayProps, generateInterval, MarkedDateProps } from '../../components/Calendar';
import { BackButton } from '../../components/BackButton';

import {
  Container,
  Header,
  Period,
  StartContainer,
  Title,
  PeriodName,
  Content,
  Footer,
  Date as DateText,
} from './styles';

import { Button } from '../../components/Form/Button';

import { useTheme } from 'styled-components';

type FormatedDates = {
  start: string;
  end: string;
};

export function Scheduling() {
  const { colors } = useTheme();

  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [formatedDates, setFormatedDates] = useState<FormatedDates>({} as FormatedDates);

  function handleChangeDate(date: any) {
    const parseDate = parse(date.dateString, 'yyyy-MM-dd', new Date());
    date.timestamp = parseDate.getTime();

    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setFormatedDates({
      start: format(start.timestamp, 'dd/MM/yyyy', { locale: ptBR }),
      end: format(end.timestamp, 'dd/MM/yyyy', { locale: ptBR }),
    });
  }

  return (
    <Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <Header>
        <BackButton color={colors.light} />

        <Title>Selecione uma data{'\n'}de check-in e check-out.</Title>

        <Period>
          <StartContainer>
            <PeriodName>De</PeriodName>
            <DateText>{formatedDates.start}</DateText>
          </StartContainer>

          <Feather name="arrow-right" size={24} color={colors.light_dark} />

          <StartContainer>
            <PeriodName>Até</PeriodName>
            <DateText>{formatedDates.end}</DateText>
          </StartContainer>
        </Period>
      </Header>

      <Content
        contentContainerStyle={{
          paddingBottom: 24,
        }}
      >
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button title="Continuar" onPress={() => {}} />
      </Footer>
    </Container>
  );
}
