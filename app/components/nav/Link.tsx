import { NavLink } from '@remix-run/react';

const Link: React.FC<{ title: string; url: string }> = ({ title, url }) => {
  return (
    <NavLink
      to={url}
      title={title}
      className={({ isActive }) =>
        `pl-2 hover:no-underline ${isActive ? 'text-hn-bg' : ''}`
      }
      aria-label={`${title} link`}
    >
      {title}
    </NavLink>
  );
};

export default Link;
