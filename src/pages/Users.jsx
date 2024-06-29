import React from 'react';
import CardUser from '../components/CardUser';
import Sidebar from '../components/Sidebar';
import Search from '../components/Search';

export default function Users() {
  return (
    <div >
      <Sidebar />
      <div className="flex-1 p-4">
      <Search/>
        <div className="flex flex-wrap my-9">
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
        </div>
      </div>
    </div>
  );
}
