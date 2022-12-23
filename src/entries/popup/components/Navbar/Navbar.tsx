import { motion } from 'framer-motion';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, ButtonSymbol, Text } from '~/design-system';
import { ButtonSymbolProps } from '~/design-system/components/ButtonSymbol/ButtonSymbol';
import { SymbolProps } from '~/design-system/components/Symbol/Symbol';
import { BackgroundColor } from '~/design-system/styles/designTokens';

type NavbarProps = {
  leftComponent?: React.ReactElement;
  rightComponent?: React.ReactElement;
  title?: string;
  titleComponent?: React.ReactElement;
  background?: BackgroundColor;
};

export function Navbar({
  leftComponent,
  rightComponent,
  title,
  titleComponent,
  background,
}: NavbarProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="full"
      position="relative"
      background={background ?? undefined}
      style={{ height: 65, zIndex: 99999 }}
    >
      {leftComponent && (
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
          exit={{ opacity: 0 }}
          position="absolute"
          style={{
            left: 15,
            top: 17,
          }}
          height="full"
        >
          {leftComponent}
        </Box>
      )}
      {title ? (
        <Box style={{ textAlign: 'center' }}>
          <Text size="14pt" weight="heavy">
            {title}
          </Text>
        </Box>
      ) : (
        titleComponent
      )}
      {rightComponent && (
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
          exit={{ opacity: 0 }}
          position="absolute"
          style={{
            right: 15,
            top: 17,
          }}
          height="full"
        >
          {rightComponent}
        </Box>
      )}
    </Box>
  );
}

Navbar.BackButton = NavbarBackButton;
Navbar.CloseButton = NavbarCloseButton;
Navbar.SymbolButton = NavbarSymbolButton;

type NavbarButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'transparent' | 'flat';
};

export function NavbarButton({
  children,
  onClick,
  variant = 'transparent',
}: NavbarButtonProps) {
  return (
    <Button
      height="32px"
      onClick={onClick}
      variant={variant}
      color="surfaceSecondaryElevated"
    >
      {children}
    </Button>
  );
}

type NavbarSymbolButtonProps = {
  height?: ButtonSymbolProps['height'];
  onClick?: () => void;
  symbol: ButtonSymbolProps['symbol'];
  variant: 'flat' | 'transparent';
};

export function NavbarSymbolButton({
  height,
  onClick,
  symbol,
  variant,
}: NavbarSymbolButtonProps) {
  return (
    <ButtonSymbol
      color="surfaceSecondaryElevated"
      height={height || '32px'}
      onClick={onClick}
      symbol={symbol}
      symbolColor="labelSecondary"
      variant={variant}
    />
  );
}

function NavbarButtonWithBack({
  height,
  symbol,
}: {
  height: ButtonSymbolProps['height'];
  symbol: SymbolProps['symbol'];
}) {
  const navigate = useNavigate();
  const padding = height === '24px' ? '4px' : '2px';
  return (
    <Box padding={padding}>
      <NavbarSymbolButton
        height={height}
        onClick={() => navigate(-1)}
        symbol={symbol}
        variant="transparent"
      />
    </Box>
  );
}

export function NavbarBackButton() {
  return <NavbarButtonWithBack height="28px" symbol="arrow.left" />;
}

export function NavbarCloseButton() {
  return <NavbarButtonWithBack height="24px" symbol="xmark" />;
}