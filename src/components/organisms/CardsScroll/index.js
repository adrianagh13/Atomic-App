import React from 'react';
import {ScrollView} from 'react-native';
import {
  conquer,
  dots1,
  dots2,
  dots3,
  explore,
  imagine,
} from '../../../assets/images';
import {Color, Size} from '../../../theme/default';
import {Container} from '../../atoms/Container';
import {StyledText} from '../../atoms/StyledText';
import {Card} from '../../molecules/Card';

export const CardsScroll = () => {
  return (
    <ScrollView horizontal={true}>
      <Card imageTitleSource={imagine} titleText="IMAGINA" dots={dots1}>
        <Container
          align="flex-start"
          height={'140px'}
          justify="space-between"
          margin="5%">
          <Container row>
            <StyledText
              text=" • Estrategia"
              weight
              size={Size.h4}
              color={Color.primary}
            />
            <StyledText text=" Digital" size={Size.h4} color={Color.primary} />
          </Container>
          <Container row>
            <StyledText
              text=" • Big Data &"
              size={Size.h4}
              color={Color.primary}
            />
            <StyledText
              text=" Análisis"
              size={Size.h4}
              color={Color.primary}
              weight
            />
          </Container>
          <Container row>
            <StyledText
              text=" • Consultoría"
              weight
              size={Size.h4}
              color={Color.primary}
            />
            <StyledText
              text=" Tecnológica"
              size={Size.h4}
              color={Color.primary}
            />
          </Container>
          <Container row>
            <StyledText
              text=" • Reducción"
              weight
              size={Size.h4}
              color={Color.primary}
            />
            <StyledText
              text=" de costos TI"
              size={Size.h4}
              color={Color.primary}
            />
          </Container>
        </Container>
      </Card>
      <Card imageTitleSource={explore} titleText="EXPLORA" dots={dots2}>
        <Container
          align="flex-start"
          height="140px"
          justify="space-between"
          margin="5%">
          <Container align="flex-start">
            <Container row>
              <StyledText
                text=" • Innovación"
                size={Size.h4}
                color={Color.primary}
              />
              <StyledText
                text=" y creación"
                weight
                size={Size.h4}
                color={Color.primary}
              />
            </Container>
            <StyledText
              text="   tecnológica"
              weight
              size={Size.h4}
              color={Color.primary}
            />
          </Container>
          <StyledText
            text=" • UI/UX"
            size={Size.h4}
            color={Color.primary}
            weight
          />
          <StyledText
            text=" • Innovación"
            weight
            size={Size.h4}
            color={Color.primary}
          />
        </Container>
      </Card>
      <Card imageTitleSource={conquer} titleText="CONQUISTA" dots={dots3}>
        <Container
          align="flex-start"
          height={'140px'}
          justify="space-between"
          margin="5%">
          <Container>
            <StyledText
              text=" • Desarrollo tecnológico y "
              size={Size.h4}
              color={Color.primary}
            />
            <StyledText
              text="creación tecnológica"
              weight
              size={Size.h4}
              color={Color.primary}
            />
          </Container>
          <StyledText
            text=" • Ciberseguridad"
            size={Size.h4}
            color={Color.primary}
            weight
          />
          <StyledText
            text=" • Servicios de la Nube"
            weight
            size={Size.h4}
            color={Color.primary}
          />
        </Container>
      </Card>
    </ScrollView>
  );
};
