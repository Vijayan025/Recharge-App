import {isAndroid} from '../common/utils';

export enum FontTypeAndroid {
  REGULAR = 'Quicksand Regular',
  MEDIUM = 'Quicksand Semi Bold 600',
  LIGHT = 'Quicksand Regular 400',
  MEDIUM_FONT = 'Quicksand Medium 500',
}

export enum FontTypeIos {
  REGULAR = 'Quicksand',
  MEDIUM = 'Quicksand',
  LIGHT = 'Quicksand',
  MEDIUM_FONT = 'Quicksand',
}

export enum FontTypeLabel {
  REGULAR = 'regular',
  MEDIUM = 'medium',
  MEDIUM_FONT = 'medium_font',
  LIGHT = 'light',
  THIN = 'thin',
}

export const FontType = isAndroid() ? FontTypeAndroid : FontTypeIos;
