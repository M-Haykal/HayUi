import React, { useState } from 'react';
import { Iris } from '../../../../src/components/Iris/Iris';
import { Ember } from '../../../../src/components/Ember/Ember';
import { Typography } from '../../../../src/components/Typography/Typography';

export const IrisExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 p-8 bg-neutral-50 rounded-2xl border border-neutral-100 w-full max-w-md">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
      </div>
      
      <div className="text-center space-y-2">
        <Typography variant="h3" weight="bold">Account Settings</Typography>
        <Typography variant="body-small" color="muted">Manage your profile and security preferences.</Typography>
      </div>

      <Ember variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Ember>

      <Iris 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        title="Edit Profile"
        footer={(
          <>
            <Ember variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Ember>
            <Ember variant="primary" onClick={() => setIsOpen(false)}>Save Changes</Ember>
          </>
        )}
      >
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Typography variant="body-small" weight="medium">Full Name</Typography>
            <input type="text" className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="John Doe" />
          </div>
          <div className="space-y-1.5">
            <Typography variant="body-small" weight="medium">Email Address</Typography>
            <input type="email" className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="john@example.com" />
          </div>
          <div className="bg-blue-50 p-4 rounded-lg flex gap-3">
             <div className="text-blue-500 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
             </div>
             <Typography variant="body-small" color="primary">Your email will be used for account verification and notifications.</Typography>
          </div>
        </div>
      </Iris>
    </div>
  );
};
