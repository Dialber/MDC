import { environment } from '../environments/environment.prod';
export class PathRest{

    static readonly RESTLOGIN=environment._http + "auth/login";
    static readonly RESTfilms=environment._http + "peliculas";

}