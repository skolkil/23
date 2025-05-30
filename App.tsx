
import React from 'react';
import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { TransactionProvider } from './contexts/TransactionContext';
import { BudgetProvider } from './contexts/BudgetContext'; // Import BudgetProvider
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import BudgetPage from './pages/BudgetPage'; // Import BudgetPage
import { APP_NAME } from './constants';

// Define icons here for simplicity or import from an icons.tsx file
const LogoutIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
  </svg>
);

const WalletIcon: React.FC<{className?: string}> = ({className}) => ( // Icon for Budget
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-5 h-5"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6.75A2.25 2.25 0 0118.75 21H5.25A2.25 2.25 0 013 18.75V12m18 0v-6.75A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25V12m18 0H3" />
  </svg>
);


const AppContent: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const location = useLocation();

  let mainClass = "flex-grow";
  if (location.pathname === '/auth') {
    // For AuthPage, main content area takes full width, applies gradient, and centers content
    mainClass += " flex items-center justify-center bg-gradient-to-br from-primary to-secondary p-4";
  } else {
    mainClass += " container mx-auto p-4 sm:p-6 lg:p-8";
  }

  return (
    <div className="min-h-screen flex flex-col"> {/* This div ensures footer is at bottom, bg-background from body applies */}
      {currentUser && location.pathname !== '/auth' && (
         <nav className="bg-primary shadow-md"> {/* Header color changed to primary green */}
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-textOnPrimary">{APP_NAME}</Link>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link 
                to="/budget" 
                className="flex items-center text-textOnPrimary hover:bg-primaryHover transition-colors duration-150 p-2 rounded-md"
                title="Бюджет"
              >
                <WalletIcon className="w-5 h-5 sm:mr-1" />
                <span className="hidden sm:inline">Бюджет</span>
              </Link>
              <button
                onClick={logout}
                className="flex items-center text-textOnPrimary border border-textOnPrimary hover:bg-primaryHover font-semibold py-2 px-3 rounded-lg transition-colors duration-150"
                title="Вийти"
              >
                <LogoutIcon className="w-5 h-5 sm:mr-1"/>
                <span className="hidden sm:inline">Вийти</span>
              </button>
            </div>
          </div>
        </nav>
      )}
      <main className={mainClass}>
        <Routes>
          <Route path="/auth" element={currentUser ? <Navigate to="/" /> : <AuthPage />} />
          <Route path="/" element={currentUser ? <DashboardPage /> : <Navigate to="/auth" />} />
          <Route path="/budget" element={currentUser ? <BudgetPage /> : <Navigate to="/auth" />} /> {/* Budget Page Route */}
          <Route path="*" element={<Navigate to={currentUser ? "/" : "/auth"} />} />
        </Routes>
      </main>
      <footer className="bg-gray-700 text-white text-center p-4 mt-auto"> {/* Footer background remains gray */}
        <p>&copy; {new Date().getFullYear()} {APP_NAME}. Всі права захищено.</p>
      </footer>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BudgetProvider> 
        <TransactionProvider> 
          <AppContent />
        </TransactionProvider>
      </BudgetProvider>
    </AuthProvider>
  );
};

export default App;
