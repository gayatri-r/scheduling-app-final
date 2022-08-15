import Realm from "realm";


// Invokes the shared instance of the Realm app.
const app = new Realm.App({id: "<Realm App ID>"}); //Add Realm App ID from MongoDB Atlas
export default app;

