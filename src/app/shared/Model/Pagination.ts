import { IAuthor } from "./AuthorDetails";

export interface IPagination {
    limit : number;
    skip:number;
    data : IAuthor[];
}