import { useState, ReactElement } from 'react';
import ProfileProjectComponent from './ProfileProjectComponent';
import ProfileJobComponent from './ProfileJobComponent';
import { Button } from '@/components/ui/button';
import { PostProjectDialog } from '../../posts/components/PostProjectDialog';
import { PostJobDialog } from '../../jobBoard/components/PostJobDialog';
type ComponentType = 'ProfileProjectComponent' | 'ProfileJobComponent';

function ProfileContainer(): ReactElement {
  const [selectedComponent, setSelectedComponent] = useState<ComponentType>(
    'ProfileProjectComponent'
  );

  const handleComponentChange = (newComponent: ComponentType): void => {
    setSelectedComponent(newComponent);
  };

  let dynamicComponent: ReactElement;
  let dynamicCreate: ReactElement;

  switch (selectedComponent) {
    case 'ProfileProjectComponent':
      dynamicComponent = <ProfileProjectComponent />;
      dynamicCreate = <PostProjectDialog />;
      break;
    case 'ProfileJobComponent':
      dynamicComponent = <ProfileJobComponent />;
      dynamicCreate = <PostJobDialog />;
      break;
    default:
      dynamicComponent = <ProfileProjectComponent />; // Adjust based on your needs
      dynamicCreate = <PostProjectDialog />;
  }

  return (
    <div>
      <div className="flex">
        <Button
          onClick={() => handleComponentChange('ProfileProjectComponent')}
          className={`p-2 hover:text-zinc-600 ${
            selectedComponent === 'ProfileProjectComponent'
              ? 'text-zinc-400 hover:text-zinc-400'
              : ''
          }`}
          variant={'ghost'}
        >
          Projects
        </Button>
        <Button
          onClick={() => handleComponentChange('ProfileJobComponent')}
          className={`p-2 hover:text-zinc-600${
            selectedComponent === 'ProfileJobComponent'
              ? 'text-zinc-400 hover:text-zinc-400'
              : ''
          }`}
          variant={'ghost'}
        >
          Job Listings
        </Button>
        <div className="ml-auto">{dynamicCreate}</div>
      </div>
      <div className="p-2">{dynamicComponent}</div>
    </div>
  );
}

export default ProfileContainer;
