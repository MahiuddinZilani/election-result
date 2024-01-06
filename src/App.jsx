
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import CandidateResult from './components/CandidateResult/CandidateResult';
import AutoRefresh from './components/AutoRefresh/AutoRefresh';

function App() {

  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    fetch('https://sheetdb.io/api/v1/2j09n1b5x4y3z')
      .then(res => res.json())
      .then(data => setCandidates(data))
  }, [])

  const center = candidates[0]?.countedCenter;

  // console.log(result);

  return (
    <>
      <div>
        <h1>দ্বাদশ জাতীয় সংসদ নির্বাচন-২০২৪</h1>
        <h2>মোট ভোটকেন্দ্র সংখ্যা: ১০৬</h2>
        <h1>ফলাফল প্রাপ্ত কেন্দ্রের সংখ্যা {center}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {candidates.map(candidate => (
          <CandidateResult key={candidate.id}
          candidate={candidate}></CandidateResult>
        ))}
      </div>
      <AutoRefresh></AutoRefresh>
    </>
  )
}

export default App
