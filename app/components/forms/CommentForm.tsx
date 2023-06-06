const CommentForm: React.FC = () => {
  return (
    <form className='flex flex-col pl-3 items-start space-y-4 justify-start'>
      <textarea
        name='comment-form'
        id='comment-form'
        cols={80}
        rows={8}
        className='border border-slate-700 dark:text-black'
      ></textarea>
      <input
        type='submit'
        value='Add comment'
        className='bg-gray-300 dark:bg-slate-400 dark:text-white text-gray-800 rounded-md py-0.5 px-2 face'
      />
    </form>
  );
};

export default CommentForm;
