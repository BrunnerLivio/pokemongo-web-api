import { RESTService } from '../../shared/RESTService';

export class MoveService extends RESTService {
    constructor() {
        super(require('../../../shared/Move.json'))
    }
}