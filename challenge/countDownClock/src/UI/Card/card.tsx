
import * as React from 'react';

const card = ({ children }:React.PropsWithChildren) => {
  return <div className="w-80 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mb-8">{children}</div>
}

export default card;