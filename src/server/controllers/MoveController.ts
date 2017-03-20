import * as path from 'path';
import { JsonController, Param, Body, Get, EmptyResultCode, Delete, Req, Res } from "routing-controllers";
import * as request from 'request';
import { Promise } from 'es6-shim';
@JsonController()
export class MoveController {
    @Get("/api/v1/move")
    getAll( @Req() req, @Res() res) {
        return require('../../shared/Move.json');
    }

    @Get("/api/v1/move/:id")
    @EmptyResultCode(404)
    getOne( @Param("id") id: string) {
        const allMoves = require('../../shared/Move.json');
        return  allMoves.filter(move => move.id.toLowerCase() === id.toLowerCase())[0];
    }
}