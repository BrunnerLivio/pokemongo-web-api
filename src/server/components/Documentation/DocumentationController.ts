import * as path from 'path';
import { Body, Controller, Delete, EmptyResultCode, Get, Param, Render, Req, Res } from 'routing-controllers';
import * as request from 'request';
import { Promise } from 'es6-shim';
@Controller()
export class DocumentationController {
    @Get('/')
    @Render('index')
    index( @Req() req, @Res() res) {

    }

    @Get('/docs')
    @Render('docs')
    docs( @Req() req, @Res() res) {

    }

    @Get('/about')
    @Render('about')
    about( @Req() req, @Res() res) {

    }
}