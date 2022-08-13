import Realm from "realm";


// Invokes the shared instance of the Realm app.
const app = new Realm.App({id: "tasktracker-idlop"}); // Set Realm app ID here.
export default app;

