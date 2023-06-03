import type { CommentNavigation } from '~/types';

const CommentNav: React.FC<{ nav: CommentNavigation }> = ({ nav }) => {
  return (
    <div className='flex'>
      {nav.parent ? (
        <div className='flex space-x-0.5'>
          <a href={`#${nav.parent}`} className='hover:underline'>
            parent
          </a>
          <span>|</span>
        </div>
      ) : null}
      {nav.prev ? (
        <div className='flex space-x-0.5'>
          <a href={`#${nav.prev}`} className='hover:underline'>
            prev
          </a>
          <span>|</span>
        </div>
      ) : null}
      {nav.next ? (
        <a href={`#${nav.next}`} className='hover:underline'>
          next
        </a>
      ) : null}
    </div>
  );
};

export default CommentNav;
