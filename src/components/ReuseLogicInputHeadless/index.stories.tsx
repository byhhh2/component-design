import { WhereToUse } from './use';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/ReuseLogicInputHeadless',
  component: WhereToUse,
} as ComponentMeta<typeof WhereToUse>;

const Template: ComponentStory<typeof WhereToUse> = () => {
  return <WhereToUse />;
};

export const WhereToUseTemplate: ComponentStory<typeof WhereToUse> =
  Template.bind({});
