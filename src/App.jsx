import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './presentation/components/PageLayout';
import Login from './presentation/components/login/Login';
import Dashboard from './presentation/components/dashboard/Dashboard';
import Sms from './presentation/components/sms/Sms';
import Email from './presentation/components/email/Email';
import PushNotification from './presentation/components/pushNotification/PushNotification';
import Users from './presentation/components/users/Users';
import AccountInfo from './presentation/components/accountInfo/AccountInfo';
import Alert from './presentation/components/alert/Alert';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PageLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/email" element={<Email />} />
          <Route path="/sms" element={<Sms />} />
          <Route path="/pushNotification" element={<PushNotification />} />
          <Route path="/users" element={<Users />} />
          <Route path="/accountinfo" element={<AccountInfo />} />
          <Route path="/alerts" element={<Alert />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
