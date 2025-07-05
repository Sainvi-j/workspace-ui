
import { useState } from 'react';
import { MainContent } from '@/components/MainContent';
import { WorkspaceModal } from '@/components/WorkspaceModal';

interface Workspace {
  id: number;
  name: string;
  description: string;
  members: number;
  lastActive: string;
  color: string;
}

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [workspaces, setWorkspaces] = useState<Workspace[]>([
    {
      id: 1,
      name: 'Marketing Campaign',
      description: 'Q4 marketing initiatives and campaigns',
      members: 8,
      lastActive: '2 hours ago',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      name: 'Product Development',
      description: 'New feature development and testing',
      members: 12,
      lastActive: '1 day ago',
      color: 'bg-green-500',
    },
    {
      id: 3,
      name: 'Design System',
      description: 'Company-wide design system documentation',
      members: 6,
      lastActive: '3 days ago',
      color: 'bg-purple-500',
    },
  ]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setCurrentStep(1);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentStep(1);
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCreateWorkspace = (workspaceData: { name: string; description: string }) => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 'bg-yellow-500', 'bg-indigo-500'];
    const newWorkspace: Workspace = {
      id: workspaces.length + 1,
      name: workspaceData.name,
      description: workspaceData.description,
      members: 1,
      lastActive: 'just now',
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    
    setWorkspaces(prev => [...prev, newWorkspace]);
  };

  return (
    <>
      <MainContent workspaces={workspaces} onCreateWorkspace={handleOpenModal} />
      
      {isModalOpen && (
        <WorkspaceModal
          currentStep={currentStep}
          onClose={handleCloseModal}
          onNext={handleNextStep}
          onPrev={handlePrevStep}
          onCreateWorkspace={handleCreateWorkspace}
        />
      )}
    </>
  );
};

export default Index;
