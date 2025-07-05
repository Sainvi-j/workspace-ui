
import { MoreVertical, Edit, Users, Share2, Archive, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Workspace {
  id: number;
  name: string;
  description: string;
  members: number;
  lastActive: string;
  color: string;
}

interface WorkspaceCardProps {
  workspace: Workspace;
  onEdit?: (workspace: Workspace) => void;
  onShare?: (workspace: Workspace) => void;
  onArchive?: (workspace: Workspace) => void;
  onDelete?: (workspace: Workspace) => void;
}

export const WorkspaceCard: React.FC<WorkspaceCardProps> = ({ 
  workspace, 
  onEdit, 
  onShare, 
  onArchive, 
  onDelete 
}) => {
  const handleEdit = () => {
    console.log('Edit workspace:', workspace.name);
    onEdit?.(workspace);
  };

  const handleShare = () => {
    console.log('Share workspace:', workspace.name);
    onShare?.(workspace);
  };

  const handleArchive = () => {
    console.log('Archive workspace:', workspace.name);
    onArchive?.(workspace);
  };

  const handleDelete = () => {
    console.log('Delete workspace:', workspace.name);
    onDelete?.(workspace);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${workspace.color} rounded-full flex items-center justify-center`}>
          <span className="text-white font-bold text-lg">
            {workspace.name.charAt(0)}
          </span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreVertical size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={handleEdit}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Workspace
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" />
              Share Workspace
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Users className="mr-2 h-4 w-4" />
              Manage Members
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleArchive}>
              <Archive className="mr-2 h-4 w-4" />
              Archive
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDelete} className="text-red-600">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {workspace.name}
      </h3>
      <p className="text-gray-600 mb-4 text-sm">
        {workspace.description}
      </p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{workspace.members} members</span>
        <span>Active {workspace.lastActive}</span>
      </div>
    </div>
  );
};
