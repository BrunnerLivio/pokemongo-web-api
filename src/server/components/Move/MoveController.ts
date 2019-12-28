import * as path from 'path';
import { JsonController, Param, Body, Get, EmptyResultCode, Delete, Req, Res } from 'routing-controllers';
import * as request from 'request';
import { Request } from 'express';
import { Promise } from 'es6-shim';
import { MoveService } from './MoveService';

@JsonController()
export class MoveController {
    @Get('/api/v1/move')
    getAll( @Req() req: Request, @Res() res) {
        return new MoveService().getAll({
            limit: parseInt(req.params.limit),
            offest: parseInt(req.params.offset)
        });
    }

    @Get('/api/v1/move/:id')
    @EmptyResultCode(404)
    getOne( @Param('id') id: string) {
        return new MoveService().getOne(id);
    }
}