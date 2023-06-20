const SekeletonComments: React.FC = () => (
  <div role='status' className=' animate-pulse py-4'>
    <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-screen-md mb-2.5'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
    <span className='sr-only'>Loading...</span>
  </div>
);

export default SekeletonComments;
