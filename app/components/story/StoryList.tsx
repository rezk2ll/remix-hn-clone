import type { Story } from '~/types';
import StoryListItem from './StoryListItem';

const StoryList: React.FC<{ items: Story[] }> = ({ items }) => {
  return (
    <div className='flex flex-col text-base w-full'>
      {(items || []).map((item, index) => (
        <div className='flex space-x-2' key={index}>
          <p className='text-gray-400 w-4 text-xs pl-2'>{index + 1}.</p>
          <StoryListItem item={item} key={index} />
        </div>
      ))}
    </div>
  );
};

export default StoryList;
