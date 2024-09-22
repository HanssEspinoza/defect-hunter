

import { envs } from "./config";
import { AppRoutes, Server } from "./server";


(() => {
    main();
}) ()

async function main () {
    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    }).start();
}
