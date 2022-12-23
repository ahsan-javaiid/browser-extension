import { keyframes, style } from '@vanilla-extract/css';

import pendingMask from 'static/assets/masks/pending_mask.png';
import { globalColors } from '~/design-system/styles/designTokens';

const maskImage = `url(${pendingMask})`;

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinnerStyle = style([
  {
    backgroundColor: globalColors.blue50,
    maskImage,
    WebkitMaskImage: maskImage,
    animationName: rotate,
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
]);