
import { X, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

interface WorkspaceModalProps {
  currentStep: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onCreateWorkspace: (workspaceData: { name: string; description: string }) => void;
}

export const WorkspaceModal: React.FC<WorkspaceModalProps> = ({
  currentStep,
  onClose,
  onNext,
  onPrev,
  onCreateWorkspace,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    template: '',
    members: [] as string[],
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCreateWorkspaceClick = () => {
    if (formData.name) {
      onCreateWorkspace({
        name: formData.name,
        description: formData.description || 'No description provided',
      });
    }
    onNext();
  };

  const templates = [
    { id: 'marketing', name: 'Marketing', description: 'Perfect for marketing campaigns and content planning' },
    { id: 'development', name: 'Development', description: 'Ideal for software development projects' },
    { id: 'design', name: 'Design', description: 'Great for design projects and creative work' },
    { id: 'general', name: 'General', description: 'A flexible template for any type of project' },
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Create a new workspace</h2>
              <p className="text-gray-600">Let's start by giving your workspace a name and description.</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Workspace Name *
                </label>
                <Input
                  placeholder="Enter workspace name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <Textarea
                  placeholder="Describe what this workspace is for..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="w-full"
                  rows={3}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose a template</h2>
              <p className="text-gray-600">Select a template to get started quickly with pre-configured settings.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {templates.map((template) => (
                <div
                  key={template.id}
                  onClick={() => handleInputChange('template', template.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                    formData.template === template.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      formData.template === template.id
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {formData.template === template.id && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{template.name}</h3>
                      <p className="text-sm text-gray-600">{template.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Invite team members</h2>
              <p className="text-gray-600">Add team members to collaborate on this workspace.</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email addresses
                </label>
                <Input
                  placeholder="Enter email addresses separated by commas"
                  className="w-full"
                />
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Team members will receive an invitation email to join this workspace.
                  You can also add members later from the workspace settings.
                </p>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check size={32} className="text-green-600" />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Workspace Created!</h2>
              <p className="text-gray-600">
                Your workspace "{formData.name}" has been created successfully.
                You can now start collaborating with your team.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 text-left">
              <h3 className="font-semibold text-gray-900 mb-2">What's next?</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Set up your first project</li>
                <li>• Customize your workspace settings</li>
                <li>• Invite more team members</li>
                <li>• Start collaborating!</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-2 h-2 rounded-full ${
                  step === currentStep
                    ? 'bg-blue-600'
                    : step < currentStep
                    ? 'bg-green-500'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X size={20} />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          {renderStep()}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <Button
            variant="outline"
            onClick={currentStep === 1 ? onClose : onPrev}
            className="flex items-center gap-2"
          >
            {currentStep === 1 ? (
              'Cancel'
            ) : (
              <>
                <ArrowLeft size={16} />
                Back
              </>
            )}
          </Button>
          
          <Button
            onClick={currentStep === 4 ? onClose : currentStep === 3 ? handleCreateWorkspaceClick : onNext}
            disabled={currentStep === 1 && !formData.name}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            {currentStep === 4 ? (
              'Go to Workspace'
            ) : (
              <>
                {currentStep === 3 ? 'Create Workspace' : 'Continue'}
                <ArrowRight size={16} />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
