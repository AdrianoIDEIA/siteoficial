import React from 'react';

interface CircleButtonProps {
  circle: {
    id: string;
    displayText: string;
    borderColor: string;
    bgColor: string;
    textColor: string;
    label: string;
  };
  activeSynopsis: string | null;
  onOpenSynopsis: (id: string, e: React.MouseEvent) => void;
}

export const CircleButton: React.FC<CircleButtonProps> = ({
  circle,
  activeSynopsis,
  onOpenSynopsis
}) => {
  const isActive = activeSynopsis === circle.id;
  const isInactive = activeSynopsis && activeSynopsis !== circle.id;

  return (
    <div 
      className={`circle-item ${isActive ? 'active' : isInactive ? 'inactive' : ''}`} 
      id={`circle-${circle.id}`}
    >
      <div 
        className={`circle-button w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] ${circle.borderColor} rounded-full`}
        onClick={(e) => onOpenSynopsis(circle.id, e)}
      >
        <div className={`h-24 md:h-28 w-24 md:w-28 ${circle.bgColor} rounded-full flex items-center justify-center`}>
          <span className="text-white font-bold text-sm">{circle.displayText}</span>
        </div>
      </div>
      <span className={`circle-label ${circle.textColor}`}>{circle.label}</span>
    </div>
  );
};

interface ModalHeaderProps {
  title: string;
  subtitle: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ title, subtitle }) => {
  return (
    <>
      <h3 className="synopsis-title">{title}</h3>
      <p className="synopsis-subtitle">{subtitle}</p>
    </>
  );
};

interface SpecialtyItemProps {
  specialty: {
    id: string;
    name: string;
    icon: any;
    color: string;
  };
  onClick: (id: string) => void;
}

export const SpecialtyItem: React.FC<SpecialtyItemProps> = ({ specialty, onClick }) => {
  const IconComponent = specialty.icon;
  
  return (
    <div 
      className="specialty-item interactive-card"
      onClick={() => onClick(specialty.id)}
    >
      <IconComponent className={`w-8 h-8 ${specialty.color} mb-2`} />
      <span className="text-sm font-medium">{specialty.name}</span>
    </div>
  );
};

interface FeatureCardProps {
  feature: {
    id: string;
    title: string;
    description: string;
    icon: any;
    color: string;
  };
  onClick: (id: string) => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, onClick }) => {
  const IconComponent = feature.icon;
  
  return (
    <div className="feature-card interactive-card" onClick={() => onClick(feature.id)}>
      <IconComponent className={`w-6 h-6 ${feature.color} mb-3`} />
      <h5 className="font-semibold mb-2">{feature.title}</h5>
      <p className="text-sm text-gray-600">{feature.description}</p>
    </div>
  );
};

interface StatItemProps {
  stat: {
    id: string;
    label: string;
    icon: any;
    color: string;
  };
  onClick: (id: string) => void;
}

export const StatItem: React.FC<StatItemProps> = ({ stat, onClick }) => {
  const IconComponent = stat.icon;
  
  return (
    <div className="stat-item interactive-card" onClick={() => onClick(stat.id)}>
      <IconComponent className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
      <span className="stat-label">{stat.label}</span>
    </div>
  );
};

interface MouseFollowerProps {
  mousePosition: { x: number; y: number };
}

export const MouseFollower: React.FC<MouseFollowerProps> = ({ mousePosition }) => {
  return (
    <div 
      className="mouse-follower"
      style={{
        left: mousePosition.x - 25,
        top: mousePosition.y - 25,
        width: '50px',
        height: '50px'
      }}
    />
  );
};