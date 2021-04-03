import { ComponentType } from 'react';
import { 
  Route as ReactDOMRoute, 
  RouteProps as ReactDOMRouteProps, 
  Redirect 
} from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

export const Route = ({ component: Component, isPrivate = false, ...rest }: RouteProps) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : <Redirect
              to={{
                pathname: isPrivate ? '/' : '/dashboard',
                state: { from: location }
              }}
            />
      }}
    />
  )
}