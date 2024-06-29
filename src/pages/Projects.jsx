import React from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Search from '../components/Search';


export default function Projects() {
  return (
    <div >
      <Sidebar />
      <div className="flex-1 p-4">
       <Search/>

        <div className="flex flex-wrap my-9">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
