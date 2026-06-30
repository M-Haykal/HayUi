import React, { useState } from 'react';
import { Ember } from '../../../../src/components/Ember/Ember';
import { Badge } from '../../../../src/components/Badge/Badge';
import { Typography } from '../../../../src/components/Typography/Typography';
import { Pulse } from '../../../../src/components/Pulse/Pulse';
import { Iris } from '../../../../src/components/Iris/Iris';
import { Flame } from '../../../../src/components/Flame/Flame';

export const DummyProject = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="w-full max-w-4xl bg-white rounded-[2.5rem] border border-neutral-100 shadow-2xl overflow-hidden flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-neutral-50 border-r border-neutral-100 p-8 space-y-8">
        <Typography variant="h3" weight="bold" color="primary" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
          HayUi
        </Typography>
        
        <nav className="space-y-2">
          {['Dashboard', 'Projects', 'Tasks', 'Settings'].map((item) => (
            <div key={item} className={`px-4 py-2 rounded-xl text-sm font-medium cursor-pointer transition-colors ${item === 'Dashboard' ? 'bg-blue-50 text-blue-600' : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900'}`}>
              {item}
            </div>
          ))}
        </nav>

        <div className="pt-8 mt-8 border-t border-neutral-200">
           <Pulse label="Notifications" checked={notifications} onChange={() => setNotifications(!notifications)} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 md:p-12 space-y-8 bg-white">
        <div className="flex justify-between items-center">
          <div>
            <Typography variant="h2" weight="bold">Welcome back, Hay!</Typography>
            <Typography variant="body-small" color="muted">Here's what's happening today.</Typography>
          </div>
          <Ember variant="primary" size="md" onClick={() => setModalOpen(true)}>
            New Project
          </Ember>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl border border-neutral-100 bg-neutral-50 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <Badge variant="success">Active</Badge>
              <Typography variant="caption" color="muted">2 days left</Typography>
            </div>
            <Typography variant="h4" weight="bold" className="mb-2">Website Redesign</Typography>
            <Typography variant="body-small" color="muted" className="mb-4">Modernizing the corporate landing page with new branding.</Typography>
            <div className="flex -space-x-2">
               {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-neutral-200"></div>)}
            </div>
          </div>

          <div className="p-6 rounded-3xl border border-neutral-100 bg-neutral-50 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <Badge variant="warning">On Hold</Badge>
              <Typography variant="caption" color="muted">Paused</Typography>
            </div>
            <Typography variant="h4" weight="bold" className="mb-2">Mobile App API</Typography>
            <Typography variant="body-small" color="muted" className="mb-4">Endpoint architecture for the upcoming mobile application.</Typography>
            <Ember variant="ghost" size="xs">Resume</Ember>
          </div>
        </div>

        {notifications && (
          <Flame type="info" title="System Update" closeable={true} onClose={() => setNotifications(false)}>
            A new version of the dashboard is available with improved performance.
          </Flame>
        )}
      </div>

      {/* Modal Triggered by Button */}
      <Iris isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Create New Project">
        <div className="space-y-4">
           <div>
             <Typography variant="body-small" weight="medium" className="mb-1.5">Project Name</Typography>
             <input type="text" className="w-full px-4 py-2 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter project name..." />
           </div>
           <div>
             <Typography variant="body-small" weight="medium" className="mb-1.5">Priority</Typography>
             <div className="flex gap-2">
                <Badge variant="neutral" className="cursor-pointer">Low</Badge>
                <Badge variant="primary" className="cursor-pointer">Medium</Badge>
                <Badge variant="error" className="cursor-pointer">High</Badge>
             </div>
           </div>
           <div className="pt-4 flex justify-end gap-3">
              <Ember variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Ember>
              <Ember variant="primary" onClick={() => setModalOpen(false)}>Create Project</Ember>
           </div>
        </div>
      </Iris>
    </div>
  );
};
