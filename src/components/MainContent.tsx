
import { Plus, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { WorkspaceCard } from './WorkspaceCard';

interface Workspace {
  id: number;
  name: string;
  description: string;
  members: number;
  lastActive: string;
  color: string;
}

interface MainContentProps {
  workspaces: Workspace[];
  onCreateWorkspace: () => void;
}

export const MainContent: React.FC<MainContentProps> = ({ workspaces, onCreateWorkspace }) => {
  const handleWorkspaceEdit = (workspace: Workspace) => {
    console.log('Editing workspace:', workspace);
    // Handle edit functionality
  };

  const handleWorkspaceShare = (workspace: Workspace) => {
    console.log('Sharing workspace:', workspace);
    // Handle share functionality
  };

  const handleWorkspaceArchive = (workspace: Workspace) => {
    console.log('Archiving workspace:', workspace);
    // Handle archive functionality
  };

  const handleWorkspaceDelete = (workspace: Workspace) => {
    console.log('Deleting workspace:', workspace);
    // Handle delete functionality
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Workspaces</h1>
            <p className="text-gray-600 mt-1">Manage and organize your workspaces</p>
          </div>
          <Button onClick={onCreateWorkspace} className="bg-blue-600 hover:bg-blue-700">
            <Plus size={20} className="mr-2" />
            Create Workspace
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6">
        {/* Search and filters */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search workspaces..."
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={20} />
            Filter
          </Button>
        </div>

        {/* Workspaces grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workspaces.map((workspace) => (
            <WorkspaceCard
              key={workspace.id}
              workspace={workspace}
              onEdit={handleWorkspaceEdit}
              onShare={handleWorkspaceShare}
              onArchive={handleWorkspaceArchive}
              onDelete={handleWorkspaceDelete}
            />
          ))}
          
          {/* Create new workspace card */}
          <div
            onClick={onCreateWorkspace}
            className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-6 hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer flex flex-col items-center justify-center min-h-[200px]"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <Plus size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Create New Workspace</h3>
            <p className="text-gray-600 text-center text-sm">
              Start a new workspace to organize your projects and collaborate with your team
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
