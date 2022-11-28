import { GlobalStyle } from './Global.styled'

import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { FriendList } from "./FriendList";
import { TransactionHistory } from "./TransactionHistory";

import user from "../../src/data/user.json";
import data from "../../src/data/data.json";
import friends from "../../src/data/friends.json"
import transactions from "../../src/data/transactions.json"


export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </>
  );
};
