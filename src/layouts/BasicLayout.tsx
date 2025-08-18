import React from 'react';
import { AppHeader, AppFooter } from '../components/ui';

interface BasicLayoutProps {
  children?: React.ReactNode;
  mobileMenuOpen: boolean;
  onMobileMenuToggle: (e: React.MouseEvent) => void;
  onMobileMenuClose: (e: React.MouseEvent) => void;
  onMobileMenuClick: (e: React.MouseEvent) => void;
  onNavigateToPage?: (page: string) => void;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({
  children,
  mobileMenuOpen,
  onMobileMenuToggle,
  onMobileMenuClose,
  onMobileMenuClick,
  onNavigateToPage
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col">
      <AppHeader
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={onMobileMenuToggle}
        onMobileMenuClose={onMobileMenuClose}
        onMobileMenuClick={onMobileMenuClick}
        onNavigateToPage={onNavigateToPage}
      />

      <main className="relative flex-1">{children}</main>

      <AppFooter />
    </div>
  );
};

export default BasicLayout;


