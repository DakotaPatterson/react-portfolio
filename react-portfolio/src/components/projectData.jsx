import codingQuizImg from '../assets/coding-quiz.png';
import weatherDashboardImg from '../assets/weather-dashboard.png';
import gallowScreenImg from '../assets/gallow-screen.png';
import workDayImg from '../assets/workDay.png';
import passwordImg from '../assets/password.png';
import noteTakerImg from '../assets/note-taker.png';

const projectsData = [
    {
      title: 'Coding Quiz',
      description: 'A coding quiz to help familiarize students with a coding assessment.',
      image: codingQuizImg,
      deployedUrl: 'https://dakotapatterson.github.io/Coding-Quiz/',
      githubUrl: 'https://github.com/DakotaPatterson/Coding-Quiz'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard with the 5 day forecast.',
      image: weatherDashboardImg,
      deployedUrl: 'https://dakotapatterson.github.io/weather-dashboard/',
      githubUrl: 'https://github.com/DakotaPatterson/weather-dashboard'
    },
    {
        title: 'Guesser Gallow',
        description: 'Guesser Gallows is a lightweight, browser based game of hangman.',
        image: gallowScreenImg,
        deployedUrl: 'https://guesser-gallows-04ed44eee1bd.herokuapp.com/',
        githubUrl: 'https://github.com/Shrcker/Guesser-Gallow'
      },
      {
        title: 'Work Day Scheduler',
        description: 'A work day scheduler to help the user keep track of important events happening that day.',
        image: workDayImg,
        deployedUrl: 'https://dakotapatterson.github.io/work-day-scheduler/',
        githubUrl: 'https://github.com/DakotaPatterson/work-day-scheduler'
      },
      {
        title: 'Password Generator',
        description: 'A generator for secure passwords.',
        image: passwordImg,
        deployedUrl: 'https://dakotapatterson.github.io/Password-generator/',
        githubUrl: 'https://github.com/DakotaPatterson/Password-generator'
      },
      {
        title: 'Note Taker',
        description: 'A Note Taker that uses the user input to generate a list of notes using express.js.',
        image: noteTakerImg,
        deployedUrl: 'https://note-taker101-1c17bd601aa1.herokuapp.com/',
        githubUrl: 'https://github.com/DakotaPatterson/NoteTaker?tab=readme-ov-file'
      },
  ];
  
  export default projectsData;