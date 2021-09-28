import { environment } from '../environments/environment.prod';
export class PathRest{

    static readonly RESTLOGIN=environment._http + "auth/login";
    static readonly RESTfilms=environment._http + "peliculas";
    static readonly API_OMDB=environment._omdb ;
    static readonly FIREBASE=environment._firebase;
    static readonly SERVERLOCALFILMS=environment._bdlocalFilmes+"films";

}