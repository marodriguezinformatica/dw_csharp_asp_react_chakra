
import {Routes, Route} from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
import { StudentNew } from './components/StudentNew';
import { StudentEdit } from './components/StudentEdit';
import { StudentCalifications } from './components/StudentCalifications';


function App() {
  

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="student" element={<StudentNew />} />
        <Route path="student/:studentId" element={<StudentEdit />} />
        <Route path="student/califications/:matriculaId" element={<StudentCalifications />} />
      </Routes>
    </>
    
  )
}

export default App
