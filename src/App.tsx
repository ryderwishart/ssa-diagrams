import React from 'react';
import TreeNode from './TreeView';

const data = {
  label: 'Epistle Constituent',
  passage: 'PHIL 1:1-4:23',
  children: [
    {
      label: 'Part Constituent',
      passage: 'PHIL 1:3-4:20',
      children: [
        {
          label: 'Section Constituent',
          passage: 'PHIL 1:1-2',
        },
        {
          label: 'Paragraph',
          passage: 'PHIL 1:3-8',
        },
        {
          label: 'Paragraph',
          passage: 'PHIL 1:9-11',
        },
        {
          label: 'Section',
          passage: 'PHIL 1:12-26',
          children: [
            {
              label: 'Paragraph',
              passage: 'PHIL 1:12-14',
            },
            {
              label: 'Paragraph',
              passage: 'PHIL 1:15-18',
            },
            {
              label: 'Paragraph',
              passage: 'PHIL 1:18-20',
            },
            {
              label: 'Paragraph',
              passage: 'PHIL 1:21-26',
            },
          ],
        },
        {
          label: 'Subpart Constituent',
          passage: 'PHIL 1:27-30',
        },
        {
          label: 'Division Constituent',
          passage: 'PHIL 2:1-30',
          children: [
            {
              label: 'Section',
              passage: 'PHIL 2:1-16',
              children: [
                {
                  label: 'Paragraph',
                  passage: 'PHIL 2:1-4',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 2:5-11',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 2:12-13',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 2:14-16',
                },
              ],
            },
            {
              label: 'Paragraph',
              passage: 'PHIL 2:17-18',
            },
            {
              label: 'Section',
              passage: 'PHIL 2:19-30',
              children: [
                {
                  label: 'Paragraph',
                  passage: 'PHIL 2:19-24',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 2:25-30',
                },
              ],
            },
            {
              label: 'Section',
              passage: 'PHIL 3:1-4:1',
              children: [
                {
                  label: 'Propositional Cluster',
                  passage: 'PHIL 3:1',
                },
                {
                  label: 'Section',
                  passage: 'PHIL 3:2-11',
                  children: [
                    {
                      label: 'Propositional Cluster',
                      passage: 'PHIL 3:2',
                    },
                    {
                      label: 'Propositional Cluster',
                      passage: 'PHIL 3:3-4a',
                    },
                    {
                      label: 'Paragraph',
                      passage: 'PHIL 3:4b-6',
                    },
                    {
                      label: 'Paragraph Cluster Constituent',
                      passage: 'PHIL 3:7-11',
                    },
                  ],
                },
                {
                  label: 'Section',
                  passage: 'PHIL 3:12-21',
                  children: [
                    {
                      label: 'Paragraph',
                      passage: 'PHIL 3:12-16',
                    },
                    {
                      label: 'Paragraph',
                      passage: 'PHIL 3:17-21',
                    },
                  ],
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:1',
                },
              ],
            },
            {
              label: 'Section',
              passage: 'PHIL 4:2-9',
              children: [
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:2-3',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:4-7',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:8-9',
                },
              ],
            },
            {
              label: 'Section',
              passage: 'PHIL 4:10-20',
              children: [
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:10-14',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:15-17',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:18-20',
                },
              ],
            },
            {
              label: 'Section Constituent',
              passage: 'PHIL 4:21-22',
            },
            {
              label: 'Paragraph',
              passage: 'PHIL 4:23',
            },
          ],
        },
      ],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <h1>Nested Tree View</h1>
      <TreeNode data={data} />
    </div>
  );
}

export default App;
