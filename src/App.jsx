// App.jsx
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import Dashboard from './Component/dashboard';
import DynamicTable from './Component/DynamicTable';
import TableForm from './Component/TableForm'; // Import the new TableForm component

import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
      
          <>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/lead-new" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status"]}/>}/>
              <Route path="/lead-hold" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status","Hold-On","Screener" ]} />} />
              
              <Route path="/lead-process" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status","Screener" ]} />} />
              <Route path="/application-new" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status","Screener" ]} />} />

              <Route path="/application-process" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status","Sanction Manager" ]} />} />

              <Route path="/application-hold" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status","Hold-On","Sanction Manager" ]} />} />

              <Route path="/application-recomndation" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status","Sanction Manager" ]} />} />
              <Route path="/application-sent-back" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status","Sanction Manager" ]} />} />
              <Route path="/sanction" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status","Sanction Manager" , "Sanction-On","Sanction-Amount"]} />} />
              <Route path="/reject" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status"]} />} />
              <Route path="/disbursal-new" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status","Sanction Manager" , "Sanction-On","Sanction-Amount"]} />} />
              <Route path="/disbursal-inprocess" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status","Sanction Manager" , "Sanction-On","Sanction-Amount","Disbursal Manager"]} />} />
              <Route path="/disbursal-hold" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status","Sanction Manager" , "Sanction-On","Sanction-Amount","Disbursal Manager"]} />} />
              <Route path="/disbursal-pending" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status","Sanction Manager" , "Sanction-On","Sanction-Amount","Disbursal Manager","Disbursal Recomnded on"]} />} />
              <Route path="/disbursal-send-back" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status","Sanction Manager" , "Sanction-On","Sanction-Amount","Disbursal Manager"]} />} />
              <Route path="/disbursed" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status"]} />} />
              <Route path="/pre-collection" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status"]} />} />
              <Route path="/collection-pending" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status"]} />} />
              <Route path="/write-off" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status"]} />} />
              <Route path="/settlement" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status"]} />} />

              <Route path="/recovery-pending" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status"]} />} />
              <Route path="/closure" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status"]} />} />
              <Route path="/pre-closure" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status","Payment Uploaded By","Payment Uploaded On"]} />} />
              <Route path="/legal" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status"]} />} />
              <Route path="/visit-request" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status"]} />} />
              <Route path="/visit-pending" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status"]} />} />
              <Route path="/visit-completed" element={<DynamicTable header={["Lead Id","Action","Applied On","Source","Name","State","City","Branch","Mobile","Pan","UserType","Status"]} />} />
              <Route path="/feedback" element={<DynamicTable header={["Lead Id","Action","Feedback On","Source","Name","State","City","Mobile","Pan","UserType","Feedback Remark","Status","CIF No","Loan No"]} />} />
              <Route path="/enquiry" element={<DynamicTable header={["Sr No","Action","Name","Email","Mobile","Loan Amount","City","Initiated On"]} />} />

              <Route path="/form" element={<TableForm />} /> {/* Route for TableForm */}
            </Routes>
          </>
       
      
    </Router>
  );
}

export default App;
