import type { Item, Story } from '~/types';
import ItemInfo from '../item/ItemInfo';
import ItemTitle from '../item/ItemTitle';

const StoryItem: React.FC<{ item: Story | Item }> = ({ item }) => {
  return (
    <div className='flex flex-col max-w-full'>
      <ItemTitle item={item} />
      <ItemInfo item={item} />
    </div>
  );
}

export default StoryItem;
