import React from 'react';
import TopNavigation from '@cloudscape-design/components/top-navigation';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <TopNavigation
        identity={{
          href: '/',
          title: 'AI & Automation Masterclass',
          logo: {
            src: 'https://img.icons8.com/color/96/brain--v1.png',
            alt: 'AI Platform Logo'
          }
        }}
        utilities={[
          {
            type: 'button',
            text: 'Trang Chủ',
            variant: location.pathname === '/' ? 'primary-button' : 'normal',
            onClick: () => navigate('/')
          },
          {
            type: 'button',
            text: '⚡ Student Portal (8 Buổi)',
            variant: location.pathname.startsWith('/app') ? 'primary-button' : 'normal',
            onClick: () => navigate('/app')
          },
          {
            type: 'button',
            text: '🛠️ Admin CMS Online',
            variant: location.pathname.startsWith('/admin') ? 'primary-button' : 'normal',
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
          overflowMenuTitleText: 'All'
        }}
      />
    </div>
  );
}
