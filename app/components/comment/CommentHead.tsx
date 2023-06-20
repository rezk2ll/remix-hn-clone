import type { CommentNavigation, FullItem, Item, Comment } from '~/types';
import CommentNav from './CommentNav';
import { getTimeDifference } from '~/utils/time';
import { getCommentsTreeSize } from '~/utils/comment';
import triangle from '~/../public/triangle.svg';
import { Link } from '@remix-run/react';

const CommentHead: React.FC<{
  comment: Comment | Item;
  nav: CommentNavigation;
  kids: FullItem[];
  display: boolean;
  onToggleDisplay: () => void;
}> = ({ comment, kids, nav, display, onToggleDisplay }) => {
  return (
    <div className='flex items-center text-gray-500 text-[10px] font-light space-x-0.5 pl-3'>
      <img src={triangle} alt='upvote' className='h-3 pb-1' />
      <span>
        by <Link to={`/user/${comment.by}`} prefetch='intent'>{comment.by}</Link>
      </span>
      <Link to={`/item/${comment.id}`} prefetch='intent'>{getTimeDifference(comment.time)} ago</Link>
      <span>|</span>
      <CommentNav nav={nav} />
      <span
        onClick={onToggleDisplay}
        className='cursor-pointer hover:underline'
      >
        {display
          ? '[-]'
          : kids.length > 0
          ? `[${getCommentsTreeSize(kids)} more]`
          : '[1 more]'}
      </span>
    </div>
  );
};

export default CommentHead;
