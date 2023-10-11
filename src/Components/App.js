import { useEffect, useState } from "react";

import { getUser } from "../Utilities/apiCall";
import repoList from "../RepoList/RepoList";
import Nav from "./Nav";
import UserInfo from "./UserInfo";
import Portfolio from "./Portfolio";
import { Route, Routes } from "react-router-dom";
import ContactForm from "./ContactForm";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState();
  const [repos, setRepos] = useState();

  useEffect(() => {
    getUser().then((data) => {
      console.log(data);
      setUser(data);
    });
  }, []);

  useEffect(() => {
    setRepos(repoList);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 min-h-screen">
        <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<UserInfo user={user} />} />
          <Route path="/portfolio" element={<Portfolio repos={repos} />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
