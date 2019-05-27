import React, { useState } from 'react';
import styled from 'styled-components';
import { themeGet, opacity } from 'styled-system';

import Links from './_links';

import theme from '../theme';
import { filterLinksBySecurity } from '../_helpers';
import Flex from '../flex';
import Box from '../box';
import Image from '../image';
import { CappedText, Paragraph } from '../typography';
import { Container, Row, Column } from '../grid';

const getVariant = ({ variant, ...props }) => {
  if (variant === 'light') {
    return { backgroundColor: themeGet('colors.white')(props) };
  } else if (variant === 'dark') {
    return { backgroundColor: themeGet('colors.black')(props) };
  } else if (variant === 'transparent') {
    return { backgroundColor: 'transparent' };
  }

  return null;
};

const FooterContainer = styled(Flex)(props => ({
  width: '100%',
  ...getVariant(props)
}));

const LinksSection = styled(Box)(
  props => ({
    transition: `opacity ${themeGet('animations.fast')(props)} ease-in-out`
  }),
  opacity
);

export default ({
  logo,
  address,
  madeIn,
  copyright,
  links,
  user,
  variant = 'dark',
  ...props
}) => {
  const [hoveredSection, setHoveredSection] = useState(false);
  const isLoggedIn = !!user;
  const preparedLinks = links.map(link => ({
    ...link,
    links: filterLinksBySecurity(isLoggedIn, link.links)
  }));

  return (
    <FooterContainer {...props} variant={variant} py={[3, null, 5]}>
      <Container>
        <Row mx={[3, null, 0]}>
          <Column width={[1, null, 1 / 3]} mb={[4, null, 0]}>
            <Image src={logo} height={48} />
            {address.map((line, index) => (
              <Paragraph color="mediumGray" mb={0} key={index}>
                {line}
              </Paragraph>
            ))}
          </Column>
          <Column width={[1, null, 2 / 3]}>
            <Flex
              flexDirection={['column', null, 'row']}
              justifyContent="space-between"
            >
              {preparedLinks.length > 0 &&
                preparedLinks.map(
                  ({ title, links }, index) =>
                    links.length > 0 && (
                      <LinksSection
                        key={index}
                        mb={3}
                        width={[1, null, `${100 / preparedLinks.length}%`]}
                        opacity={
                          !hoveredSection || hoveredSection === title
                            ? 1
                            : theme.opacities[1]
                        }
                        onMouseEnter={() => setHoveredSection(title)}
                        onMouseLeave={() => setHoveredSection(false)}
                      >
                        <CappedText color="mediumGray">{title}</CappedText>
                        <Links variant={variant} links={links} />
                      </LinksSection>
                    )
                )}
            </Flex>
          </Column>
          <Column width={1} mt={[3, null, 5]}>
            {madeIn && (
              <Paragraph
                mb={2}
                textAlign={['left', null, 'center']}
                color={variant === 'dark' ? 'white' : 'mediumGray'}
              >
                {madeIn}
              </Paragraph>
            )}
            {copyright && (
              <Paragraph
                mb={0}
                textAlign={['left', null, 'center']}
                fontSize={1}
                color={variant === 'dark' ? 'mediumGray' : 'lightGray'}
              >
                {copyright}
              </Paragraph>
            )}
          </Column>
        </Row>
      </Container>
    </FooterContainer>
  );
};
