import { RecoilRoot, useRecoilValue } from "recoil";
import {  notificationss, totalnotif } from "./atoms/linkedin";

function HomeButtons() {
  // const homevalue = useRecoilValue(home);
  // const networkvalue = useRecoilValue(network);
  // const jobsvalue = useRecoilValue(jobs);
  // const notificationsvalue = useRecoilValue(notifications);
  const totalcount=useRecoilValue(totalnotifs)

  const val=useRecoilValue(notificationss)
  
  return (
    <>
      <button>Home {val.home}</button>
      <button>My network{val.networkvalue >=100 ? "99+" : val.networkvalue}</button>
      <button>Jobs{val.jobs}</button>
      <button>Messaging</button>
      <button>Notifications{val.notifications}</button>
      <button>ME{totalcount}</button>
    </>
  );
}

function App() {
  return (
    <RecoilRoot>
      <HomeButtons />
    </RecoilRoot>
  );
}

export default App;