import type { Job } from '~/types';
import JobListItem from './JobListItem';

const JobList: React.FC<{ items: Job[] }> = ({ items }) => {
  return (
    <div className='flex flex-col text-base'>
      {items.map((item, index) => (
        <JobListItem item={item} key={index} />
      ))}
    </div>
  );
};

export default JobList;
