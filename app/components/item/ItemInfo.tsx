import type { Item } from '~/types';
import { getTimeDifference } from '~/utils/time';

const ItemInfo: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <div className='text-gray-500 text-[10px] font-light flex space-x-1 pl-3'>
      <div className='flex space-x-0.5'>
        <p>{item.score} points</p>
        <span>
          by <a href={`/user/${item.by}`}>{item.by}</a>
        </span>
        <a href={`/item/${item.id}`}>{getTimeDifference(item.time)} ago </a>
        <span>|</span>
      </div>
      <a href={`/item/${item.id}`}>{item.descendants} comments</a>
    </div>
  );
};

export default ItemInfo;
