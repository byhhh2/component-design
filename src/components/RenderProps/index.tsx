import { MouseEvent, useState } from 'react';
import * as S from './index.style';

interface Props {
  render: (props: any) => JSX.Element;
}

const RenderPropsComponent = ({ render }: Props) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <S.Container onMouseMove={handleMouseMove}>
      {render({ mouse: mousePosition })}
    </S.Container>
  );
};

export default RenderPropsComponent;
