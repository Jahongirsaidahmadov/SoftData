import './App.css';
import FullPage from './components/PageScroller/FullPage'
import Burger from './components/ItemComponent/Button/button'
import { useState } from 'react'
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom'

function App() {

  const [currentPage, setCurrentPage] = useState(null);
  const [burgerContent, setBurgerContent] = useState(false)

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route  exact path = '/sdgps/policy'>
            <div className = "policy">
              <h1>Documentation...</h1>
              <p><strong>Privacy Policy</strong></p>
              <p>This Privacy Policy was last modified on May 21.2021.</p>
              <p>SoftData (“SoftData,” “we,” or “us”) are committed to protecting your privacy. This Privacy Policy explains our practices regarding the collection, use, disclosure, and protection of information that is collected through our mobile app SDGPS and our website (collectively, our “Service”), as well as your choices regarding the collection and use of information. Capitalized terms that are not defined in this Privacy Policy have the meaning given them in our Terms of Use.</p>
              <p className = "tab"><strong>1.	How We Collect and Use Information</strong></p>
              <p>We collect the following types of information about you:</p>
              <p><strong>Profile Information.</strong> When you subscribe to any product, we may collect your personal information such as your email address.</p>
              <p><strong>Geolocation.</strong> We collect your unique user identifier and your location through GPS, WiFi, or wireless network triangulation in order to obtain your location for the purposes of providing our Service. We may collect your location information in order to provide the Service (for example, to share your location with the other people when they request it via SMS and password, or to provide advertising). If you want to opt-out of the collection of your location data, please adjust your settings in your mobile device to limit the app’s access to your location data. Please see “Your Choices About Your Information” below to learn more.</p>
              <p><strong>Messages and User Content.</strong> We collect your sms information when someone send message to you with keyword and password. And use SMS service to send back your location to the sender.</p>
              <p className = "tab"><strong>2.	Sharing of Your Information</strong></p>
              <p>Personal Information: We may share your personal information with third parties outside the Company and its controlled subsidiaries and affiliates in some circumstances, including:</p>
              <p>
                <ul>
                  <p><strong>Personal Information:</strong> We may share your personal information with third parties outside the Company and its controlled subsidiaries and affiliates in some circumstances, including:</p>
                  <li>•	We may share your personal information with our third-party business partners, vendors and consultants who perform services on our behalf or who help us provide our Services, such as accounting, managerial, technical, marketing or analytic services.</li>
                  <li>•	We may share your personal information, including your location data, with third parties for marketing purposes</li>
                  <li>•	Any information or content that you voluntarily post to the website or to our Facebook page will automatically be available to the public. We may publicly post your reviews and comments online on our website or mobile app, or link your reviews to third party websites.</li>
                  <li>•	We may aggregate or otherwise strip data of all personally identifying characteristics of our data and may share that anonymized and/or aggregated data with third parties. For example, we may share de-identified location data with third parties that analyse location and movement trends.</li>
                  <li>•	We may at any time buy or sell/divest the company, or any combination of its products, services, assets and/or businesses. Personal information such as customer names and email addresses, and other user information related to the Service will likely be one of the items transferred in these types of transactions. We may also share, transfer or assign such information in the course of corporate divestitures, mergers, acquisitions, bankruptcies, dissolutions or similar transactions or proceedings.</li>
                  <li>•	Except as described above, we will not disclose personal information to third parties (including law enforcement, other government entity, or civil litigant; excluding our subcontractors) unless required to do so by law or subpoena or if in our sole discretion, we determine it is necessary to (a) conform to the law, comply with legal process, or investigate, prevent, or take action regarding suspected or actual illegal activities; (b) to enforce our Terms of Use, take precautions against liability, to investigate and defend ourselves against any claims or allegations, or to protect the security or integrity of our site; and/or (c) to exercise or protect the rights, property, or personal safety of Mobilekidunia, our Users or others.</li>
                </ul>
              </p>
              <p className = "tab"><strong>3.	How We Protect Your Information</strong></p>
              <p>Mobilekidunia cares about the security of your information and uses commercially reasonable physical, administrative, and technological safeguards to preserve the integrity and security of all information we collect and that we share with our service providers. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%. In the event that any information under our control is compromised as a result of a breach of security, we will take reasonable steps to investigate the situation and where appropriate, notify those individuals whose information may have been compromised and take other steps, in accordance with any applicable laws and regulations.</p>
              <p className = "tab"><strong>4.	Your Choices About Your Information</strong></p>
              <p>You may, of course, decline to submit any personal information through the Service, in which case SoftData may not be able to provide its Services to you.</p>
              <p>Modifying Your Account Information and Settings: You may modify your account information, change your password at any time by logging in to your account. If you have any questions about reviewing or modifying your account information, you can contact us directly softdatauz@gmail.com.</p>
              <p className = "tab"><strong>5.	Links to Other Web Sites and Services</strong></p>
              <p>We are not responsible for the practices employed by websites or services linked to or from the Service, nor the information or content contained therein. Please remember that when you use a link to go from the Service to another website, our Privacy Policy does not apply to third-party websites or services. Your browsing and interaction on any third-party website or service, including those that have a link on our website, are subject to that third party’s own rules and policies. Please read over those rules and policies before proceeding.</p>
              <p className = "tab"><strong>6.	Changes to Our Privacy Policy</strong></p>
              <p>Mobilekidunia may, in its sole discretion, modify or update this Privacy Policy from time to time, and so you should review this page periodically. When we change the policy, we will update the ‘last modified’ date at the top of this page. If there are material changes to this Privacy Policy or in how Mobilekidunia will use your personal information, we will notify you either by prominently posting a notice of such changes prior to implementing the change or by directly sending you a notification.</p>
              <p>
                <ul>
                  <p><strong>Advertisement</strong></p>
                  <li><strong>•	Geographic or contextual information which we collect from you.</strong></li>
                  <li><strong>•	Google may use the device ID from where the ad is serving to generate interest and demographic categories (for example, 'sports enthusiasts' or 'inferred age: 18-34'). These interest and demographic categories will be used to serve ads better targeted you._</strong></li>
                </ul>
              </p>
              <p><strong>To opt out of interest-based ads:</strong></p>
              <Link to = '/'>Back to Home Page</Link>
            </div>
          </Route>
          <Route exact path = '/'>
            {/* <Burger burgerContent = {burgerContent} setBurgerContent = {setBurgerContent} currentPage = {currentPage} setCurrentPage = {setCurrentPage} /> */}
            <FullPage currentPage = {currentPage} setCurrentPage = {setCurrentPage} burgerContent = {burgerContent} setBurgerContent = {setBurgerContent}/>
          </Route>          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
