import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

import { Stastistics } from './Statistics/Statistics';
import stats from './Statistics/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';


export const App = () => {
  return (
  <div>
<Profile 
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
    <Stastistics title="Upload Stats"
      stats={stats}
     />
    <FriendList friends={friends} />  
    <TransactionHistory transactions={transactions} />
  </div>
  );
};