import type { Job } from '~/types';
import { getTimeDifference } from '~/utils/time';
import { getUrlDomain } from '~/utils/url';

const JobListItem: React.FC<{ item: Job }> = ({ item }) => {
  return (
    <div className='flex flex-col -space-y-1.5 pt-0.5'>
      <a
        href={item.url}
        target='_blank'
        rel='noreferrer'
        className='hover:no-underline flex space-x-0.5 text-xs'
      >
        <span>{item.title}</span>
        {item.url ? (
          <p className='text-gray-500 text-[10px] hover:underline'>
            ({getUrlDomain(item.url)})
          </p>
        ) : null}
      </a>
      <a
        className='text-gray-500 text-[10px] font-light'
        href={`/item/${item.id}`}
      >
        {getTimeDifference(item.time)} ago
      </a>
    </div>
  );
};

export default JobListItem;
