import App from "./app";
import MongoConnection from "./models/connection";

async function main() {
    try {
        const { DB_HOST, SERVER_PORT } = process.env;
        const app = new App();
        MongoConnection.connect();
        app.start(SERVER_PORT);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

main()