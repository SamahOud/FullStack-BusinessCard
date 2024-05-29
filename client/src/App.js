import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from './UI/providers/ThemeProvider'
import { SnackbarProvider } from './UI/providers/SnackbarProvider'
import { UserProvider } from './UI/components/users/providers/UserProvider'
import Layout from './UI/layout/Layout'
import Router from './UI/components/routes/Router'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <SnackbarProvider>
            <UserProvider>
              <Layout>
                <Router />
              </Layout>
            </UserProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
