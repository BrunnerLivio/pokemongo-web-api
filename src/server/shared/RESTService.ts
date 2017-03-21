import * as _ from 'underscore';
import APP_SETTINGS from '../AppSettings';

export abstract class RESTService {
    private source: any[];

    constructor(sourceItems: any[]) {
        this.source = sourceItems;
    }

    private validateSingleItem(item: any[]) {
        if (item.length > 1) {
            throw new Error(`Unexpected amount of items found (${item.length}). Expected 1`);
        }

        if (item.length === 0) {
            throw new Error('No item found with requested id');
        }
    }

    private getDefaultMethodOption(): RESTMethodOption {
        return {
            limit: APP_SETTINGS.request.limit.default,
            offest: 0
        };
    }

    public getOne(id: string): any {
        let filteredSource = _(this.source)
            .filter(sourceItem =>
                sourceItem.id.toLowerCase() === id.toLowerCase());

        this.validateSingleItem(filteredSource);

        return _(filteredSource).first();
    }

    public getAll(options?: RESTMethodOption): any[] {
        if (!options) {
            options = this.getDefaultMethodOption();
        }

        return _(this.source)
            .rest(options.offest)
            .slice(0, options.limit);
    }
}

export interface RESTMethodOption {
    limit?: number;
    offest?: number;
}