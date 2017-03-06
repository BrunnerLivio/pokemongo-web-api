import { JsonController, Param, Body, Get, Post, Put, Delete, Req, Res } from "routing-controllers";
import * as request from 'request';
import { Promise } from 'es6-shim';
@JsonController()
export class PokemonController {
    @Get("/pokemon")
    getAll( @Req() req, @Res() res) {
        var regexp = new RegExp('^(V[0-9]+_POKEMON_?.*)', 'g');

        return new Promise<any>((ok, fail) => {
            request.get('https://raw.githubusercontent.com/BrunnerLivio/pokemongo-game-master/master/versions/latest/GAME_MASTER.json', (error, response, body) => {
                let game_master: any = JSON.parse(body)
                let pokemons: Object[] =
                    game_master
                        .itemTemplates
                        .filter(item => regexp.test(item.templateId));
                ok(pokemons);
            });
        });
    }

    @Get("/pokemon/:id")
    getOne( @Param("id") id: number) {
        return "This action returns user #" + id;
    }

    @Post("/pokemon")
    post( @Body() user: any) {
        return "Saving user...";
    }

    @Put("/pokemon/:id")
    put( @Param("id") id: number, @Body() user: any) {
        return "Updating a user...";
    }

    @Delete("/pokemon/:id")
    remove( @Param("id") id: number) {
        return "Removing user...";
    }

}