import React, { useState } from 'react';

interface NodeProps {
  data: any;
}

const TreeNode: React.FC<NodeProps> = ({ data }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <div style={{ marginLeft: '20px' }}>
      <div onClick={toggleCollapse}>
        {data.children ? (collapsed ? '[+]' : '[-]') : ''}
        {data.label} : {data.passage}
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
