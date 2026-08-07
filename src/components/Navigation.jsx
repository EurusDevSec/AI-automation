import React from 'react';
import TopNavigation from '@cloudscape-design/components/top-navigation';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <TopNavigation
      identity={{
        href: '/',
        title: 'AI & Automation Masterclass',
        logo: {
          src: 'https://img.icons8.com/color/96/brain--v1.png',
          alt: 'AI Logo'
        }
      }}
      utilities={[
        {
          type: 'button',
          text: 'Trang Chủ (Landing)',
          ariaLabel: 'Landing Page',
          onClick: () => navigate('/')
        },
        {
          type: 'button',
          text: '⚡ Student Portal (8 Buổi)',
          variant: location.pathname.startsWith('/app') ? 'primary-button' : 'normal',
          ariaLabel: 'Student Learning Portal',
          onClick: () => navigate('/app')
        },
        {
          type: 'button',
          text: '🛠️ Admin CMS (Sửa Bài)',
          variant: location.pathname.startsWith('/admin') ? 'primary-button' : 'normal',
          ariaLabel: 'Teacher Admin CMS',
          onClick: () => navigate('/admin')
        },
        {
          type: 'url',
          text: 'GitHub Repo',
          href: 'https://github.com/EurusDevSec/AI-automation',
          external: true,
          externalIconAriaLabel: 'Opens in a new tab'
        }
      ]}
      i18nStrings={{
        searchIconAriaLabel: 'Search',
        searchDismissIconAriaLabel: 'Dismiss search',
        overflowMenuTriggerText: 'More',
        overflowMenuTitleText: 'All',
        overflowMenuBackIconAriaLabel: 'Back',
        overflowMenuDismissIconAriaLabel: 'Dismiss menu'
      }}
    />
  );
}
