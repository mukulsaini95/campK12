/**
 *
 * Asynchronously loads the component for FilterBox
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
