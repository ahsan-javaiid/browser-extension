import React from 'react';

import { Box, Column, Columns, Inline, Text } from '~/design-system';

export default function SeedPhraseTable({ seed }: { seed: string }) {
  return (
    <Box
      background="surfaceSecondaryElevated"
      borderRadius="16px"
      padding="12px"
      paddingBottom="4px"
      borderColor={'transparent'}
      borderWidth={'1px'}
    >
      <Columns>
        <Column>
          <Box paddingRight="14px">
            {seed
              .split(' ')
              .slice(0, 6)
              .map((word, index) => (
                <Box
                  borderColor="transparent"
                  borderWidth="1px"
                  borderRadius="8px"
                  padding="8px"
                  key={`word_${index}`}
                  style={{
                    width: '102px',
                    marginBottom: '8px',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Inline alignVertical="center" space="10px">
                    <Text
                      size="11pt"
                      weight="medium"
                      color={'labelQuaternary'}
                      align="center"
                    >
                      0{index + 1}
                    </Text>
                    <Text
                      size="14pt"
                      weight="semibold"
                      color="label"
                      align="center"
                    >
                      {word}
                    </Text>
                  </Inline>
                </Box>
              ))}
          </Box>
        </Column>
        <Box
          borderColor="separatorTertiary"
          height="fit"
          style={{
            width: '1px',
            height: '100%',
            borderRightStyle: 'solid',
            borderRightWidth: '1px',
          }}
        />
        <Column>
          <Box paddingLeft="14px">
            {seed
              .split(' ')
              .slice(-6)
              .map((word, index) => (
                <Box
                  borderColor="transparent"
                  borderRadius="8px"
                  padding="8px"
                  borderWidth="1px"
                  key={`word_${index + 6}`}
                  style={{
                    width: '102px',
                    marginBottom: '8px',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Inline alignVertical="center" space="10px">
                    <Text
                      size="11pt"
                      weight="medium"
                      color={'labelQuaternary'}
                      align="center"
                    >
                      {index + 7 > 9 ? '' : '0'}
                      {index + 7}
                    </Text>
                    <Text
                      size="14pt"
                      weight="semibold"
                      color="label"
                      align="center"
                    >
                      {word}
                    </Text>
                  </Inline>
                </Box>
              ))}
          </Box>
        </Column>
      </Columns>
    </Box>
  );
}
