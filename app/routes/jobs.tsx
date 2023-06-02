import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import JobList from '~/components/job/JobList';
import apiService from '~/lib/api';

export async function loader() {
  return json(await apiService.fetchJobStories());
}

export default function Jobs() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className='bg-hn-bg min-h-screen pt-4 pl-3'>
      <div className='text-gray-500 text-xs pb-3'>
        <span>
          These are jobs at YC startups. See more at{' '}
          <a
            href='ycombinator.com/jobs'
            target='_blank'
            rel='noreferrer noopener'
            className='underline'
          >
            ycombinator.com/jobs
          </a>
          .
        </span>
      </div>
      <JobList items={data} />
    </div>
  );
}
