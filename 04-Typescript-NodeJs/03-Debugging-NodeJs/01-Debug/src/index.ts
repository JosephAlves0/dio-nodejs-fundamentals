import { getBaseEmail } from "./services/email";

async function main() {
    console.log(await getBaseEmail("Bento"));

    console.log("Finalizado");
    console.log("...");
}

main();
