import { useContext } from 'react';
import AuthContext from '../contex/AuthProvider';

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
