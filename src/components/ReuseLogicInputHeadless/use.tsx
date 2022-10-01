import InputWrapper from '.';
import * as S from './index.style';

export const WhereToUse = () => {
  return (
    <InputWrapper id="name" type="text">
      <S.Input />
      <S.Label>label</S.Label>
    </InputWrapper>
  );
};
