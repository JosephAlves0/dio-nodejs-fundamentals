import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";


export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
    
    //Definido o contrato da interface para retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }

    //buscando os dados
    const data = await repositoryPodcast();

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    responseFormat.body = data;

    return responseFormat;
};