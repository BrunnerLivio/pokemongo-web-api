import { JsonController, Param, Body, Get, EmptyResultCode, Delete, Req, Res } from "routing-controllers";
import * as request from 'request';
import { Promise } from 'es6-shim';
@JsonController()
export class PokemonController {
    @Get("/pokemon")
    getAll( @Req() req, @Res() res) {
        const pokemons = require('../Data/Pokemon.json');
        return pokemons;
    }

    @Get("/pokemon/:id")
    @EmptyResultCode(404)
    getOne( @Param("id") id: string) {
        const allPokemons = require('../Data/Pokemon.json');
        let filteredPokemons = allPokemons.filter(pokemon => pokemon.id.toLowerCase() === id.toLowerCase())[0];
        return filteredPokemons;
    }
}