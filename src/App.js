import './App.css';
import bgpattern from './images/bg-pattern-desktop.svg';
import woman from './images/illustration-woman-online-desktop.svg';
import box from './images/illustration-box-desktop.svg';
import Accordion from './components/accordion.jsx';


const accordionData = [
  { title: "How many team members can I invite?", text: "As many as you want!" },
  { title: "What is the maximum file upload size?", text: "No more than 2GB. All files in your account must fit your allotted storage space." },
  { title: "How do I reset my password?", text: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you." },
  { title: "Can I cancel my subscription?", text: "Yes! Send us a message and we'll process your request no questions asked." },
  { title: "Do you provide additional support?", text: "Chat and email support is available 24/7. Phone lines are open during normal business hours." }
];

export default function App() {
  return (
    <div className="App">
      <header className="center">
        <div className="main-container">
          <div className="img-container">
            <img src={woman} alt="Illustration - woman" class="img-woman"></img>
            <img src={bgpattern} alt="Illustration - bgpattern" class="img-bg"></img>
            <img src={box} alt="Illustration - Box" class="img-box"></img>
          </div>
          <div className="faq-container">
            <h1>FAQ</h1>
            {accordionData.map(({ title, text }) => (
              <Accordion title={title} text={text} />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};
