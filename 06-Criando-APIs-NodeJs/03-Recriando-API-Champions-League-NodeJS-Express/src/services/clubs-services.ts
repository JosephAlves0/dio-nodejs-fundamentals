import * as HttpResponse from "../utils/http-helper"
import * as ClubRepositoy from "../repositories/clubs-repository"

export const getClubService = async() => {
    const data = await ClubRepositoy.findAllClubs();
    const response = HttpResponse.ok(data);
    return response;
}