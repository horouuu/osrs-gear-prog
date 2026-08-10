import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import AppToaMin from './AppToaMin.tsx'
//import AppToa1 from './AppToa1.tsx'
//import AppToa2 from './AppToa2.tsx'
//import AppTob1 from './AppTob1.tsx'
//import AppTob2 from './AppTob2.tsx'
import AppCoxMin from './AppCoxMin.tsx'
//import AppCox1 from './AppCox1.tsx'
//import AppCox2 from './AppCox2.tsx'
//import AppCox3 from './AppCox3.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppCoxMin />
  </StrictMode>,
)
