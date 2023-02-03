import { Link, useResolvedPath, useMatch } from "react-router-dom";

export const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} className="nav-link" {...props}>
        {children}
      </Link>
    </li>
  );
};
