import type { Story } from '~/types';
import StoryListItem from './StoryListItem';

const StoryList: React.FC<{ items: Story[] }> = ({ items }) => {
  return (
    <div className='flex flex-col space-y-5'>
      {items.map((item, index) => (
        <StoryListItem item={item} key={index} />
      ))}
    </div>
  );
};

export default StoryList;
