import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const [isAdmin, isLoadingAdmin] = useAdmin()
   const { user, loading } = useAuth()
   const location = useLocation();

   if (loading || isLoadingAdmin) {
     return <span className="loading loading-spinner text-accent"></span>;
   }

   if (user && isAdmin) {
     return children;
   }
   return <Navigate state={{ from: location }} to="/"></Navigate>;
};

export default AdminRoute;