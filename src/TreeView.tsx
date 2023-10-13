import React, { useState } from 'react';

interface NodeProps {
  data: {
    label: string;
    passage: string;
    theme?: string;
    sublabel?: string;
    children?: any[];
  };
}

const TreeNode: React.FC<NodeProps> = ({ data }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <div className="ml-5">
      <div className="cursor-pointer hover:underline" onClick={toggleCollapse}>
        <span className="mr-2">
          {data.children ? (collapsed ? '[+]' : '[-]') : ''}
        </span>
        <span className="font-semibold">{data.label}</span>
        <span className="ml-2 text-gray-600">: {data.passage}</span>

        {data.theme && (
          <span className="ml-2 text-blue-500">(Theme: {data.theme})</span>
        )}

        {data.sublabel && (
          <span className="ml-2 text-green-500">
            (Sublabel: {data.sublabel})
          </span>
        )}
      </div>

      {!collapsed && data.children && (
        <div>
          {data.children.map((child: any, index: number) => (
            <TreeNode key={index} data={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
