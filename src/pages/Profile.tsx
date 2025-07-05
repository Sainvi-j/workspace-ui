
import { User, Mail, Phone, MapPin, Calendar, Edit3, Camera } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const userInfo = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    joinDate: 'January 2023',
    role: 'Product Manager',
    department: 'Product Development',
    avatar: 'JD'
  };

  const workspaceStats = [
    { label: 'Workspaces Created', value: '8' },
    { label: 'Projects Completed', value: '24' },
    { label: 'Team Members', value: '15' },
    { label: 'Tasks Completed', value: '156' },
  ];

  const recentWorkspaces = [
    { name: 'Marketing Campaign', role: 'Owner', lastActive: '2 hours ago' },
    { name: 'Product Development', role: 'Member', lastActive: '1 day ago' },
    { name: 'Design System', role: 'Admin', lastActive: '3 days ago' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-600 mt-2">Manage your personal information and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="relative inline-block">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {userInfo.avatar}
                </div>
                <Button 
                  size="sm" 
                  className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0 bg-gray-600 hover:bg-gray-700"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-900">{userInfo.name}</h2>
                <p className="text-gray-600">{userInfo.role}</p>
                <p className="text-sm text-gray-500">{userInfo.department}</p>
              </div>

              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">{userInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">{userInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">{userInfo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Joined {userInfo.joinDate}</span>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Edit3 className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats and Activity */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Activity Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {workspaceStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Workspaces */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Workspaces</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentWorkspaces.map((workspace, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {workspace.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{workspace.name}</h3>
                        <p className="text-sm text-gray-600">{workspace.role} • {workspace.lastActive}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
