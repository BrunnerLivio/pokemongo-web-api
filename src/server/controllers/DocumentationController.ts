import * as path from 'path';
import { Body, Controller, Delete, EmptyResultCode, Get, Param, Render, Req, Res } from 'routing-controllers';
import * as request from 'request';
import { Promise } from 'es6-shim';
@Controller()
export class DocumentationController {
    @Get('/')
    @Render('index')
    getAll( @Req() req, @Res() res) {
        
    }
}