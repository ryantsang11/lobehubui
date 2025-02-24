import { FC } from 'react';

import { DivProps, SvgProps } from '@/types';

const LobeChatText: FC<SvgProps & DivProps & { size?: number }> = ({
  size = '1em',
  style,
  ...rest
}) => (
  <svg
    fill="currentColor"
    fillRule="evenodd"
    height={size}
    style={{ flex: 'none', lineHeight: 1, ...style }}
    viewBox="0 0 980 320"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <title>PwCChat</title>
    <img src="https://banner2.cleanpng.com/20180805/jjq/334896213abeb0c8e0033265b30dbf5c.webp"/>
  </svg>
);

export default LobeChatText;
