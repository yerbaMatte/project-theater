import { Outlet } from 'react-router-dom';
import MainNavigation from '../Components/MainNavigation/MainNavigation';
import { useAuth } from '../Hooks/onAuth';
import { useAppSelector } from '../Hooks/hooks';

export default Root = () => {
  useAuth();
  const isUserAccLoading = useAppSelector(
    (state) => state.auth.isUserAccLoading
  );

  return (
    <>
      {!isUserAccLoading && (
        <>
          <MainNavigation />
          <main>
            <Outlet />
          </main>
        </>
      )}
    </>
  );
};
