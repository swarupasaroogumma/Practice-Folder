import { RecoilRoot, useRecoilValue } from "recoil";
import { home, jobs, network, notifications, totalcost } from "./atoms/linkedin";

function HomeButtons() {
  const homevalue = useRecoilValue(home);
  const networkvalue = useRecoilValue(network);
  const jobsvalue = useRecoilValue(jobs);
  const notificationsvalue = useRecoilValue(notifications);
  const totalcount=useRecoilValue(totalcost)
  
  return (
    <>
      <button>Home {homevalue}</button>
      <button>My network{networkvalue >=100 ? "99+" : networkvalue}</button>
      <button>Jobs{jobsvalue}</button>
      <button>Messaging</button>
      <button>Notifications{notificationsvalue}</button>
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