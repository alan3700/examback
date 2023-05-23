import { Resolver, Query, Mutation, Arg, ID } from "type-graphql";
import {Pays, PaysInput} from "../entities/Pays";
import datasource from "../utils";

@Resolver()
export class PaysResolver {
    @Mutation(()=> Pays)
    async createPays(
        @Arg("data", () => PaysInput) data : PaysInput
    ): Promise<Pays>{
        return await datasource.getRepository(Pays).save(data);
    }

    @Query(() => Pays, { nullable: true })
    async getPaysByCode(@Arg("code") code: string): Promise<Pays | null> {
        const pays = await datasource.getRepository(Pays).findOne({ where: { code } });
        return pays || null;
    }

    @Query(() => [Pays])
    async pays(): Promise<Pays[]> {
        return await datasource
        .getRepository(Pays)
        .find();
    }
}
