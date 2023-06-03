import type { Item, Story } from '~/types';
import ItemTitle from '../item/ItemTitle';
import ItemInfo from '../item/ItemInfo';

const StoryListItem: React.FC<{ item: Story | Item }> = ({ item }) => {
  return (
    <div className='flex flex-col -space-y-1.5'>
      <ItemTitle item={item} size='xs' />
      <ItemInfo item={item} />
    </div>
  );
};

export default StoryListItem;
