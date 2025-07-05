
import { BarChart3, TrendingUp, Activity, PieChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Analytics = () => {
  const metrics = [
    { title: 'Total Projects', value: '24', change: '+12%', trend: 'up' },
    { title: 'Completed Tasks', value: '189', change: '+8%', trend: 'up' },
    { title: 'Team Productivity', value: '92%', change: '+3%', trend: 'up' },
    { title: 'Active Users', value: '18', change: '-2%', trend: 'down' },
  ];

  const projectData = [
    { name: 'Marketing Campaign', progress: 85, status: 'On Track' },
    { name: 'Product Development', progress: 62, status: 'In Progress' },
    { name: 'Design System', progress: 90, status: 'Nearly Complete' },
    { name: 'User Research', progress: 45, status: 'Behind Schedule' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-2">Track your team's performance and project progress</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{metric.title}</CardTitle>
              <TrendingUp className={`h-4 w-4 ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              <p className={`text-xs mt-1 ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Project Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Project Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projectData.map((project, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{project.name}</span>
                    <span className="text-sm text-gray-600">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className={`text-xs ${
                    project.status === 'On Track' || project.status === 'Nearly Complete' 
                      ? 'text-green-600' 
                      : project.status === 'Behind Schedule' 
                        ? 'text-red-600' 
                        : 'text-yellow-600'
                  }`}>
                    {project.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Activity Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <PieChart className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Tasks Completed</p>
                    <p className="text-sm text-gray-600">This week</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-blue-600">47</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">New Projects</p>
                    <p className="text-sm text-gray-600">This month</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-green-600">12</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <Activity className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Team Meetings</p>
                    <p className="text-sm text-gray-600">This week</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-purple-600">8</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
