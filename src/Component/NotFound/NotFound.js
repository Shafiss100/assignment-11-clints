import { EmojiSadIcon } from '@heroicons/react/solid';
import React from 'react';
<EmojiSadIcon className="icon" />;
const NotFound = () => {
    return (
      <div className="w-100 ">
        <div className="w-100 d-flex justify-content-center">
          <EmojiSadIcon className="w-25" />
        </div>
        <h1 className="text-center">404</h1>
        <h1 className="text-center">No result found</h1>
      </div>
    );
};

export default NotFound;