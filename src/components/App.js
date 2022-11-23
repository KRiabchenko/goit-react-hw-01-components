import { Profile } from "./Profile";
import { Statistics } from "./Statistics";

import user from "../../src/data/user.json"


export const App = () => {
  return (
    <div>
      <Profile user={user[0]} />
      <Statistics/>
    </div>
  );
};
