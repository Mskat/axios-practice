jest.mock('axios', function() {
    return jest.fn();
});

const mockAxios = require('axios');
const modIndex = require('../index.js');

const strURL = 'https://example.com';

describe('index', function() {
    it('should return an email', async function() {
        const strUserId = '6';
        const strExpectedEmail = 'info@example.com';
        mockAxios.mockImplementationOnce(function() {
            return {
                data: {
                    email: strExpectedEmail,
                }
            };
        });
        const strEmail = await modIndex.getUserEmail(strUserId, strURL);
        expect(strEmail).toEqual(strExpectedEmail);
        expect(mockAxios.mock.calls.length).toEqual(1);
        expect(mockAxios.mock.calls[0][0]).toEqual({
            method: 'GET',
            url: strUserId,
            baseURL: strURL,
            params: {
            query: strUserId,
          }
        });
    });
});
