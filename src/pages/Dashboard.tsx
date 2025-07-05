
import { BarChart3, Users, FolderOpen, Activity, TrendingUp, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  const stats = [
    { title: 'Total Workspaces', value: '12', icon: FolderOpen, change: '+2 from last month' },
    { title: 'Active Projects', value: '8', icon: Activity, change: '+1 from last week' },
    { title: 'Team Members', value: '24', icon: Users, change: '+3 from last month' },
    { title: 'Completion Rate', value: '87%', icon: TrendingUp, change: '+5% from last month' },
  ];

  const recentActivity = [
    { action: 'New workspace created', time: '2 hours ago', workspace: 'Marketing Campaign' },
    { action: 'Project completed', time: '1 day ago', workspace: 'Product Development' },
    { action: 'Team member added', time: '2 days ago', workspace: 'Design System' },
    { action: 'Milestone reached', time: '3 days ago', workspace: 'Marketing Campaign' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Overview of your workspace activity and performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-green-600 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.workspace}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
