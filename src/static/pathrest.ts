import { environment } from '../environments/environment.prod';
export class PathRest{

    static readonly RESTLOGIN=environment._http + "auth/login";
    static readonly RESTfilms=environment._http + "peliculas";
    static readonly API_OMDB=environment._omdb ;
    static readonly FIREBASE=environment._firebase;
    static readonly SERVERLOCALFILMS=environment._bdlocalFilmes+"films";
    static readonly SERVERBACK4APP=environment.URLParseserver;
    static readonly IDBACK4APP=environment.idback4;
    static readonly KEYBACK4APP=environment.jasvascriptKeyBack4;

}