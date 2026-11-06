import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tanstack_pagination from './tanstack_pagination.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
    // <App />
    <QueryClientProvider client={queryClient} >
      <Tanstack_pagination/>
    </QueryClientProvider>
)
