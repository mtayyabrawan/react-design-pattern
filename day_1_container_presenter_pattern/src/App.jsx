import UserProfile from "./with-pattern/components/user-profile-container";
// import UserProfile from "./messy-way/components/UserProfile";

import "./App.css";
function App() {
    return (
        <div>
            <UserProfile userId="1" />
        </div>
    );
}

export default App;
