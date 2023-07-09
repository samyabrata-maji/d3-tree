// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import React from "react";
import Tree from "react-d3-tree";

function App() {
  const orgChart = {
    name: "CEO",
    children: [
      {
        name: "Manager",
        // attributes: {
        //   department: "Production",
        // },
        children: [
          {
            name: "Foreman",
            attributes: {
              department: "Fabrication",
            },
            children: [
              {
                name: "Worker",
              },
            ],
          },
          {
            name: "Foreman",
            attributes: {
              department: "Assembly",
            },
            children: [
              {
                name: "Worker",
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <>
      <div id="treeWrapper" style={{ width: "50em", height: "20em" }}>
        <Tree pathFunc="step" data={orgChart} />
      </div>
    </>
  );
}

export default App;
