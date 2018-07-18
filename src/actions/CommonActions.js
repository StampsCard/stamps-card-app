import {
  BACKGROUND_CHANGED
} from './types';

import GetRandomBackgroundImageService from '../services/GetRandomBackgroundImage';

export const changeBackground = () => {
  return (dispatch) => {
    const background = GetRandomBackgroundImageService.random();

    dispatch({
      type: BACKGROUND_CHANGED,
      payload: background
    });
  };
};
