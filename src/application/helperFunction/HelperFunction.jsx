import { ReactComponent as DashboardIcon } from '../../../infrastructure/assets/images/dashboardIcon.svg';
import { ReactComponent as DashboardIconBlue } from '../../../infrastructure/assets/images/dashboardIconBlue.svg';
export const getIcons = ({ isActive = true, iconName = 'dashboard' }) => {
  if (iconName === 'dashboard') {
    if (isActive) {
      return <DashboardIcon />;
    }
    return <DashboardIconBlue />;
  }
};
