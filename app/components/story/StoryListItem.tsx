import type { Story } from '~/types';
import triangle from '../../../public/triangle.svg';
import { getTimeDifference, getUrlDomain } from '~/utils';

const StoryListItem: React.FC<{ item: Story }> = ({ item }) => {
  return (
    <div className='flex flex-col -space-y-1.5'>
      <a
        href={item.url}
        target='_blank'
        rel='noreferrer'
        className='hover:no-underline flex space-x-0.5 text-xs'
      >
        <img src={triangle} alt='upvote' className='h-4 pb-1' />
        <span>{item.title}</span>
        {item.url ? (
          <p className='text-gray-500 text-[10px]'>
            ({getUrlDomain(item.url)})
          </p>
        ) : null}
      </a>
      <div className='text-gray-500 text-[10px] font-light flex space-x-1 pl-3'>
        <div className='flex space-x-0.5'>
          <p>{item.score} points</p>
          <span>
            by <a href={`/user/${item.by}`}>{item.by}</a>
          </span>
          <a href={`/item/${item.id}`}>{getTimeDifference(item.time)} ago |</a>
        </div>
        <a href={`/item/${item.id}`}>{item.descendants} comments</a>
      </div>
    </div>
  );
};

export default StoryListItem;
