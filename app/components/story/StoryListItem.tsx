import type { Story } from '~/types'

const StoryListItem: React.FC<{ item: Story}> = ({ item }) => {
  return <div>{ item.id } { item.title }</div>
}

export default StoryListItem
