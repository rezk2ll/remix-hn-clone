import type { Item } from '~/types';
import triangle from '../../../public/triangle.svg';
import { getUrlDomain } from '~/utils';

const ItemTitle: React.FC<{ size?: 'xs' | 'sm'; item: Item }> = ({
  size = 'sm',
  item,
}) => {
  return (
    <a
      href={item.url}
      target='_blank'
      rel='noreferrer'
      className={`hover:no-underline flex space-x-0.5 overflow-hidden text-ellipsis whitespace-nowrap ${
        size === 'sm' ? 'text-sm' : 'text-xs'
      }`}
    >
      <img
        src={triangle}
        alt='upvote'
        className={`h-4 ${size === 'sm' ? 'pb-0.5' : 'pb-1'}`}
      />
      <span className='overflow-hidden text-ellipsis whitespace-nowrap'>
        {item.title}
      </span>
      {item.url ? (
        <p className='text-gray-500 text-[10px] overflow-x-hidden text-ellipsis whitespace-nowrap'>
          ({getUrlDomain(item.url)})
        </p>
      ) : null}
    </a>
  );
};

export default ItemTitle;
