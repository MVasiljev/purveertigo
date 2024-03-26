import {Query} from "../generated/graphql";

export type TRoot = {
    refetch: Function
    session: Query
};