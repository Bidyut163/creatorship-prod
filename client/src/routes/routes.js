import Dashboard from '../components/admin/Dashboard';
import BusinessList from '../components/admin/BusinessList';
import CreatorList from '../components/admin/CreatorList';
import BusinessProfileForm from '../components/admin/profile/BusinessProfileForm';
import CreatorProfileForm from '../components/admin/profile/CreatorProfileForm';
import BusinessProfileEdit from '../components/admin/profile/BusinessProfileEdit';
import CreatorProfileEdit from '../components/admin/profile/CreatorProfileEdit';
import BusinessDetail from '../components/admin/BusinessDetail';
import CreatorDetail from '../components/admin/CreatorDetail';

const routes = [
    { path: '/admin', exact: true, name: 'Admin' },
    {
        path: '/admin/dashboard',
        exact: true,
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/admin/businesses',
        exact: true,
        name: 'BusinessList',
        component: BusinessList,
    },
    {
        path: '/admin/businesses/:businessId',
        exact: true,
        name: 'BusinessDetail',
        component: BusinessDetail,
    },
    {
        path: '/admin/creators',
        exact: true,
        name: 'CreatorList',
        component: CreatorList,
    },
    {
        path: '/admin/creators/:creatorId',
        exact: true,
        name: 'CreatorDetail',
        component: CreatorDetail,
    },
    {
        path: '/admin/business/create-profile',
        exact: true,
        name: 'BusinessProfileForm',
        component: BusinessProfileForm,
    },
    {
        path: '/admin/business/edit-profile',
        exact: true,
        name: 'BusinessProfileEdit',
        component: BusinessProfileEdit,
    },
    {
        path: '/admin/creator/create-profile',
        exact: true,
        name: 'CreatorProfileForm',
        component: CreatorProfileForm,
    },
    {
        path: '/admin/creator/edit-profile',
        exact: true,
        name: 'CreatorProfileEdit',
        component: CreatorProfileEdit,
    },
];

export default routes;
