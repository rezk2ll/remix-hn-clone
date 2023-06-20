import { Link } from '@remix-run/react';
import type { Item } from '~/types';
import { getTimeDifference } from '~/utils/time';

const ItemInfo: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <div className='text-gray-500 text-[10px] font-light flex space-x-1 pl-3'>
      <div className='flex space-x-0.5'>
        <p>{item.score} points</p>
        <span>
          by <Link to={`/user/${item.by}`} prefetch='intent'>{item.by}</Link>
        </span>
        <Link to={`/item/${item.id}`} prefetch='intent'>{getTimeDifference(item.time)} ago </Link>
        <span>|</span>
      </div>
      <Link to={`/item/${item.id}`} prefetch='intent'>{item.descendants} comments</Link>
    </div>
  );
};

export default ItemInfo;
