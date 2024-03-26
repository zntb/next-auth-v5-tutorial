// 'use client';
// import { useCurrentRole } from '@/hooks/use-current-role';

import { currentRole } from '@/lib/auth';

// const AdminPage = () => {
//   const role = useCurrentRole();

//   return <div>Current role: {role}</div>;
// };
const AdminPage = async () => {
  const role = await currentRole();

  return <div>Current role: {role}</div>;
};

export default AdminPage;
