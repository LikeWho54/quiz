import logo from './logo.svg';
import './App.css';
import Quiz from 'react-quiz-component';
import {Grid, Link} from "@mui/material"
function App() {
   const quiz =  {
    "appLocale": {
      "landingHeaderText": "<questionLength> intrebari",
      "question": "Intrebare",
      "startQuizBtn": "Incepe",
      "resultFilterAll": "All",
      "resultFilterCorrect": "Corect",
      "resultFilterIncorrect": "Incorect",
      "prevQuestionBtn": "Inapoi",
      "nextQuestionBtn": "Inainte",
      "resultPageHeaderText": "Ai terminat. Ai raspuns corect la <correctIndexLength> din <questionLength> intrebari."
    },
  "quizTitle": "Testeaza-ti cuostintele",
  "questions": [
 
    {
      "question": "Ultimul rege al României este _______",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Ferdinand I",
        "Carol II",
        "Michael I",
        "Mihai I"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Răspuns corect.",
      "messageForIncorrectAnswer": "Răspuns incorect. Te rugăm să încerci din nou.",
      "explanation": "Mihai I a fost ultimul rege al României, care a domnit între anii 1927-1930 şi 1940-1947.",
      "point": "20"
    },
    
    {
      "question": "Ce rol a avut România în Primul Război Mondial?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A fost un aliat al Germaniei",
        "A fost un aliat al Antantei"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Răspuns corect.",
      "messageForIncorrectAnswer": "Răspuns incorect. Te rugăm să încerci din nou.",
      "explanation": "România a intrat în Primul Război Mondial ca aliat al Antantei, în 1916.",
      "point": "10"
    },
    
    {
      "question": "Care dintre domnitorii Tarii Romanesti a fost supranumit 'Intemeietorul'",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Basarab I",
        "Vlad Tepes",
        "Mircea cel Batran",
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Răspuns corect",
      "messageForIncorrectAnswer": "Răspuns incorect. Te rugăm să încerci din nou.",
      "explanation": "Mircea cel Batran a fost supranumit 'Intemeietorul'.",
      "point": "30"
    },
    {
      "question": `În ce an au avut loc bătăliile de la Mărăști, Mărășești și Oituz? ”Pe aici nu se trece!” - deviza născută atunci pe câmpul de luptă. 27.000 de români au ținut piept atacurilor germane în cele trei mari bătălii ale Primului Război Mondial.`,
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "1920",
        "1917",
        "1910",
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Răspuns corect",
      "messageForIncorrectAnswer": "Răspuns incorect. Te rugăm să încerci din nou.",
      "explanation": "1917",
      "point": "10"
    },
    {
      "question": `Cine a fost primul prim-ministru din istoria României?`,
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Mihail Kogalniceanu",
        "Barbu Catargiu",
        "Apostol Arsache",
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Răspuns corect",
      "messageForIncorrectAnswer": "Răspuns incorect. Te rugăm să încerci din nou.",
      "explanation": "Barbu Catargiu",
      "point": "30"
    },
    {
      "question": `Ce premier român, militar de carieră, a fost înlăturat de la putere în cadrul unui lovituri de stat regale?`,
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Ion Antonescu",
        "Alexandru Averescu",
        "Constantin Prezan",
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Răspuns corect",
      "messageForIncorrectAnswer": "Răspuns incorect. Te rugăm să încerci din nou.",
      "explanation": "Ion Antonescu",
      "point": "30"
    },
    {
      "question": `În ce an s-a proclamat independența de stat a României?`,
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "1877",
        "1977",
        "1850",
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Răspuns corect",
      "messageForIncorrectAnswer": "Răspuns incorect. Te rugăm să încerci din nou.",
      "explanation": "1877",
      "point": "30"
    },

  ]
} 
  return (
<>
<Link sx={{ml:3}} href="https://istoproiect.netlify.app/">Inapoi</Link>

<Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
>
  <Grid item xs={3}>
    <img src="https://www.cotroceni1900.ro/wp-content/uploads/2019/09/fotografii-vechi-bucuresti-bucharest-bucuresci-interbelic-in-cartierul-cotroceni-fotograf-willy-pragher-strada-doctor-nicolae-vicol-1000x500.jpg"/>
  <Quiz quiz={quiz} shuffle={true}/>
  </Grid>   
   
</Grid> 
</>
  );
}

export default App;
