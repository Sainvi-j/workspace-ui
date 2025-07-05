
import { Settings as SettingsIcon, User, Bell, Shield, Palette, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Settings = () => {
  const settingsSections = [
    {
      title: 'Account Settings',
      icon: User,
      items: [
        { label: 'Full Name', value: 'John Doe', type: 'input' },
        { label: 'Email Address', value: 'john@example.com', type: 'input' },
        { label: 'Phone Number', value: '+1 (555) 123-4567', type: 'input' },
        { label: 'Job Title', value: 'Product Manager', type: 'input' },
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        { label: 'Email Notifications', value: true, type: 'toggle' },
        { label: 'Push Notifications', value: false, type: 'toggle' },
        { label: 'Weekly Summary', value: true, type: 'toggle' },
        { label: 'Project Updates', value: true, type: 'toggle' },
      ]
    },
    {
      title: 'Privacy & Security',
      icon: Shield,
      items: [
        { label: 'Two-Factor Authentication', value: 'Enabled', type: 'status' },
        { label: 'Last Login', value: '2 hours ago', type: 'status' },
        { label: 'Active Sessions', value: '3 devices', type: 'status' },
        { label: 'Data Export', value: '', type: 'action' },
      ]
    },
    {
      title: 'Appearance',
      icon: Palette,
      items: [
        { label: 'Theme', value: 'Light', type: 'select' },
        { label: 'Language', value: 'English', type: 'select' },
        { label: 'Timezone', value: 'UTC-8 (PST)', type: 'select' },
        { label: 'Date Format', value: 'MM/DD/YYYY', type: 'select' },
      ]
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your account preferences and configuration</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {settingsSections.map((section, sectionIndex) => (
          <Card key={sectionIndex}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <section.icon className="h-5 w-5" />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between">
                    <Label className="text-sm font-medium text-gray-700">{item.label}</Label>
                    <div className="flex items-center gap-2">
                      {item.type === 'input' && (
                        <Input 
                          defaultValue={item.value} 
                          className="w-48 text-sm"
                        />
                      )}
                      {item.type === 'toggle' && (
                        <div className={`w-10 h-5 rounded-full p-1 cursor-pointer transition-colors ${
                          item.value ? 'bg-blue-600' : 'bg-gray-300'
                        }`}>
                          <div className={`w-3 h-3 rounded-full bg-white transition-transform ${
                            item.value ? 'translate-x-5' : 'translate-x-0'
                          }`}></div>
                        </div>
                      )}
                      {item.type === 'status' && (
                        <span className="text-sm text-gray-600">{item.value}</span>
                      )}
                      {item.type === 'select' && (
                        <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                          <option>{item.value}</option>
                        </select>
                      )}
                      {item.type === 'action' && (
                        <Button variant="outline" size="sm">
                          Export
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-end gap-4 pt-6 border-t">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
      </div>
    </div>
  );
};

export default Settings;
