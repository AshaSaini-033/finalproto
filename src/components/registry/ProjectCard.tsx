import React from 'react';
import { MapPin, Shield, Zap, QrCode, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const statusColors = {
    active: 'success',
    pending: 'warning',
    'under-review': 'info',
    verified: 'success'
  } as const;

  return (
    <Card hover className="h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.name}</h3>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin size={14} className="mr-1" />
              {project.location}
            </div>
          </div>
          <Badge variant={statusColors[project.status]}>
            {project.status.replace('-', ' ')}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <img
            src={project.images[0] || `https://images.pexels.com/photos/1655166/pexels-photo-1655166.jpeg?auto=compress&cs=tinysrgb&w=400`}
            alt={project.name}
            className="w-full h-32 object-cover rounded-lg"
          />
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-gray-500">Credits Issued</span>
              <div className="font-semibold text-blue-700">{project.creditsIssued.toLocaleString()}</div>
            </div>
            <div>
              <span className="text-gray-500">Trust Score</span>
              <div className="font-semibold text-green-700">{project.trustScore}%</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {project.verificationBadge && (
              <Shield className="text-green-600" size={16} />
            )}
            <Zap className="text-yellow-600" size={16} />
            <span className="text-sm text-gray-600">Impact Score: {project.biodiversityScore}/10</span>
          </div>

          <div className="flex flex-wrap gap-1">
            {project.sdgImpacts.slice(0, 3).map((impact, index) => (
              <Badge key={index} variant="info" className="text-xs">
                {impact}
              </Badge>
            ))}
          </div>

          <div className="flex justify-between items-center pt-2">
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <QrCode size={16} />
              </Button>
              <Button variant="ghost" size="sm">
                <ExternalLink size={16} />
              </Button>
            </div>
            <Button size="sm" onClick={() => onViewDetails(project)}>
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};