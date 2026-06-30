import React from 'react';
import { Badge } from '../../../../src/components/Badge/Badge';
import { Ember } from '../../../../src/components/Ember/Ember';
import { Typography } from '../../../../src/components/Typography/Typography';

export const StatusCard = () => {
  return (
    <div className="w-full max-w-sm bg-white rounded-3xl border border-neutral-100 shadow-xl overflow-hidden">
      <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 relative">
        <div className="absolute -bottom-10 left-6 p-1 bg-white rounded-2xl shadow-lg">
          <div className="w-20 h-20 bg-neutral-100 rounded-xl overflow-hidden flex items-center justify-center text-neutral-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
        </div>
      </div>
      
      <div className="pt-14 px-6 pb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <Typography variant="h3" weight="bold">Haykal Anwar</Typography>
            <Typography variant="body-small" color="muted">Fullstack Developer</Typography>
          </div>
          <Badge variant="success" dot={true}>Available</Badge>
        </div>

        <Typography variant="body-base" className="mb-6 text-neutral-600">
          Building premium web experiences with React, Astro, and Tailwind CSS. Open for collaborations.
        </Typography>

        <div className="flex gap-3">
          <Ember variant="primary" size="sm" className="flex-1">View Profile</Ember>
          <Ember variant="secondary" size="sm" className="flex-1">Message</Ember>
        </div>
      </div>
    </div>
  );
};
