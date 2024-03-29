// Pages and Components
import Landing from '../pages/landing';
import BlogSingle from '../pages/blog/single-blog';
import BlogSingle2 from '../pages/blog/single-blog2';
import Navbar from '../components/Navbar';

// ------------------

/**
 * Render Navigation bar when rendering a component and isLanding to check
 * if the component to be rendered is the landing page or not.
 *
 * In landing page case: nav links works as scrollable links
 * other case(such as : blog): nav links works as router links
 *
 * @param component the component to be rendered
 * @param isLanding check for a component if its the landingpage
 * @returns the given component with the Navbar
 */
const renderWithNav = (
  component: JSX.Element,
  isLanding: boolean
): JSX.Element => {
  return (
    <>
      <Navbar isLanding={isLanding} />
      {component}
    </>
  );
};

type RoutesType = {
  path: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
};

// Routes we will visit
const routes: RoutesType[] = [
  {
    path: '/',
    element: renderWithNav(<Landing />, true),
  },
  {
    path: '/single-blog',
    element: renderWithNav(<BlogSingle />, false),
  },
  {
    path: '/single-blog2',
    element: renderWithNav(<BlogSingle2 />, false),
  },
];

export default routes;

// ---------------
