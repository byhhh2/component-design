import RenderPropsComponent from '.';

export const WhereToUse = () => {
  return (
    <RenderPropsComponent
      render={({ mouse }) => (
        <div>
          <h1>Move the mouse around!</h1>
          <p>
            The current mouse position is ({mouse.x}, {mouse.y})
          </p>
        </div>
      )}
    />
  );
};
