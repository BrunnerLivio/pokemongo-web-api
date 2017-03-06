import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@Controller()
export class PokemonController {

    @Get("/pokemon")
    getAll() {
        return "This action returns all users";
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