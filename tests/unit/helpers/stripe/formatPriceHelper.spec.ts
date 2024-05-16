import {expect, describe, test} from '@jest/globals';
import { format } from '../../../../src/helpers/stripe/formatPriceHelper';

describe('Format price to send to Stripe API', () => {

    test('Format price correctly', async () => {

        let result = format("1.00");        
        expect(result).toBe(100);

        result = format("52.52");        
        expect(result).toBe(5252);

        result = format("101.00");        
        expect(result).toBe(10100);

    });

    test('Format price without dot correctly', async () => {

        let result = format("1");        
        expect(result).toBe(100);

        result = format("52");        
        expect(result).toBe(5200);

        result = format("101");        
        expect(result).toBe(10100);

    });

    test('Format price with one digit after dot correctly', async () => {

        let result = format("1.3");        
        expect(result).toBe(130);

        result = format("41.4");        
        expect(result).toBe(4140);

    });

    test('Format price with using coma', async () => {

        let result = format("1,3");        
        expect(result).toBe(130);

        result = format("21,32");        
        expect(result).toBe(2132);

    });


});