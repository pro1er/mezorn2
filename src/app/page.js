"use client";
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Typing() {
  const [words, setWords] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [typedCharacters, setTypedCharacters] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeLimit, setTimeLimit] = useState(10);
  const [wordStatus, setWordStatus] = useState([]);
  const [infiniteMode, setInfiniteMode] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [cheating, setCheating] = useState(false);
  // const [username, setUsername] = useState(null);
  const [scores, setScores] = useState([]);
  const inputRef = useRef(null);
  const router = useRouter();

  const fetchWords = async (number) => {
    try {
      const response = await fetch(`https://random-word-api.vercel.app/api?words=${number}&length=5`);
      if (response.ok) {
        const data = await response.json();
        setWords(prevWords => [...prevWords, ...data]);
        setWordStatus(prevStatus => [...prevStatus, ...new Array(data.length).fill(null)]);
      } else {
        setError('Error: ' + response.statusText);
      }
    } catch (error) {
      setError('Fetch error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('http://localhost:8080/profile', {
  //       method: 'GET',
  //       credentials: 'include'
  //     });
  //     if (res.ok) {
  //       const data = await res.json();
  //       setUsername(data.username);
  //       setScores(data.scores);
  //     } else {
  //       router.push('/');
  //     }
  //   };
  //   fetchData();
  //   fetchWords(50); // Fetch a larger number of words to handle the time-limited mode
  // }, []);

  useEffect(() => {
    if (endTime && startTime) {
      const durationInMinutes = (endTime - startTime) / 60000;
      const calculatedWpm = Math.round((correctWords / durationInMinutes) || 0);
      const calculatedAccuracy = Math.round(((correctWords / currentWordIndex) * 100) || 0);
      setWpm(calculatedWpm);
      setAccuracy(calculatedAccuracy);

      // Save results to the server
      // const saveResults = async () => {
      //   const res = await fetch('http://localhost:8080/save-result', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     credentials: 'include',
      //     body: JSON.stringify({ wpm: calculatedWpm, accuracy: calculatedAccuracy }),
      //   });
      //   if (res.ok) {
      //     const newScores = await res.json();
      //     setScores(newScores);
      //   }
      // };
      // saveResults();
    }
  }, [endTime]);

  useEffect(() => {
    if (infiniteMode && currentWordIndex >= words.length - 5) {
      fetchWords(50);
    }
  }, [currentWordIndex, infiniteMode]);

  // Real-time WPM calculation for infinite mode
  useEffect(() => {
    let interval;
    if (infiniteMode && startTime) {
      interval = setInterval(() => {
        const currentTime = Date.now();
        const durationInMinutes = (currentTime - startTime) / 60000;
        const calculatedWpm = Math.round((correctWords / durationInMinutes) || 0);
        setWpm(calculatedWpm);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [infiniteMode, startTime, correctWords]);

  const startCountdown = (seconds) => {
    if (!infiniteMode) {
      setCountdown(seconds);
      const interval = setInterval(() => {
        setCountdown(prevCountdown => {
          if (prevCountdown <= 1) {
            clearInterval(interval);
            setEndTime(Date.now());
            return 0;
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }
  };

  const handleUserInputChange = (e) => {
    const inputValue = e.target.value;
    setUserInput(inputValue);

    if (!startTime) {
      setStartTime(Date.now());
      startCountdown(timeLimit);
    }

    if (inputValue.endsWith(' ')) {
      const trimmedInput = inputValue.trim();
      const newWordStatus = [...wordStatus];
      if (trimmedInput === words[currentWordIndex]) {
        setCorrectWords(correctWords + 1);
        newWordStatus[currentWordIndex] = 'correct';
      } else {
        newWordStatus[currentWordIndex] = 'incorrect';
      }
      setWordStatus(newWordStatus);
      setCurrentWordIndex(currentWordIndex + 1);
      setTypedCharacters(typedCharacters + trimmedInput.length + 1);
      setUserInput('');

      if (!infiniteMode && countdown === 0) {
        setEndTime(Date.now());
      }
    }
  };

  const handleTimeLimitChange = (seconds) => {
    setTimeLimit(seconds);
    handleRedo();
  };

  const handleRedo = () => {
    setStartTime(null);
    setEndTime(null);
    setCorrectWords(0);
    setTypedCharacters(0);
    setCurrentWordIndex(0);
    setUserInput('');
    setWpm(0);
    setAccuracy(0);
    setLoading(true);
    setError(null);
    setWordStatus([]);
    setWords([]);
    setCheating(false);
    fetchWords(50);
    setCountdown(null);
  };

  const toggleInfiniteMode = () => {
    setInfiniteMode(!infiniteMode);
    handleRedo();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    setCheating(true);
    setEndTime(Date.now());
  };

  // const handleLogout = async () => {
  //   await fetch('http://localhost:8080/logout', {
  //     method: 'POST',
  //     credentials: 'include'
  //   });
  //   router.push('/');
  // };

  return (
    <div className='w-full h-screen bg-main flex items-center flex-col font-side justify-between text-side py-6 '>
      <div className='flex items-center w-full justify-center'>
        <span className='text-2xl'>mezorn</span>
        {/* {username ? (
          <div className='absolute right-10 flex items-center gap-4'>
            <span className='text-field'>{username}</span>
            <button onClick={handleLogout} className='text-field hover:text-side duration-300'>Logout</button>
          </div>
        ) : (
          <Link href='/login' className='text-field absolute right-10 hover:text-side duration-300 md:flex hidden'>login/signup</Link>
        )} */}
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between'>
          <div className='text-xs md:text-base'>
            {[10, 25, 50, 100, 250].map(seconds => (
              <button
                key={seconds}
                onClick={() => handleTimeLimitChange(seconds)}
                className='mx-2'
                disabled={infiniteMode}
              >
                {infiniteMode ? '' : `${seconds}`}
              </button>
            ))}
          </div>
          <div className='text-xs md:text-base'>WPM: {wpm} / ACC: {accuracy}%</div>
        </div>
        <div className='flex justify-between'>
          <button
            onClick={toggleInfiniteMode}
            className='mx-2 text-xs md:text-base'
          >
            {infiniteMode ? 'Switch to time limited Mode' : 'Switch to Infinite Mode'}
          </button>
        </div>
        <div className='bg-field md:w-[640px] w-full px-4 flex flex-col rounded-md py-6 gap-3'>
          {loading ? <p>Loading...</p> : (
            <>
              {!infiniteMode && countdown !== null && <div className='text-center text-lg'>{countdown}s</div>}
              {cheating && <div className='text-center text-lg text-red-500'>You are cheating!</div>}
              <p className='whitespace-normal'>
                {words.map((word, index) => (
                  <span
                    key={index}
                    className={
                      currentWordIndex === index ? 'text-purple-500' :
                      wordStatus[index] === 'correct' ? 'text-green-500' :
                      wordStatus[index] === 'incorrect' ? 'text-red-500' : ''
                    }
                  >
                    {word}{' '}
                  </span>
                ))}
              </p>
            </>
          )}
          {error && <p>{error}</p>}
          <div className='flex justify-between gap-3'>
            <input
              className='bg-main w-full rounded-[4px] text-lg px-4'
              value={userInput}
              onChange={handleUserInputChange}
              onPaste={handlePaste}
              ref={inputRef}
              disabled={loading || (!infiniteMode && countdown === 0) || cheating}
            />
            <button
              className='bg-main px-4 py-[6px] rounded-[4px] text-lg'
              onClick={handleRedo}
            >
              redo
            </button>
          </div>
        </div>
        {scores.length > 0 && (
          <div className='bg-white p-4 rounded shadow-md mt-6'>
            <h2 className='text-xl mb-4'>Your Typing Scores</h2>
            <ul>
              {scores.map((score, index) => (
                <li key={index} className='flex justify-between'>
                  <span>WPM: {score.wpm}</span>
                  <span>Accuracy: {score.accuracy}%</span>
                  <span>Date: {new Date(score.date).toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>user guide / themes</div>
    </div>
  );
}
