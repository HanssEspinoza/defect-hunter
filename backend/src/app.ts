import { Server } from "./server"

(() => {  main() })

async function main () {
    new Server().start();
}
