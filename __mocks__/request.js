import Device from './device';
import UserLocation from './userLocation';
import CacheKey from './cacheKey';

export const mockRespondWith = jest.fn();
export const mockGetHeader = jest.fn();
export const mockSetHeader = jest.fn();
export const mockAddHeader = jest.fn();
export const mockRemoveHeader = jest.fn();
export const mockGetHeaders = jest.fn();
export const mockGetVariable = jest.fn();
export const mockSetVariable = jest.fn();
export const mockRoute = jest.fn();

const Request = jest.fn().mockImplementation(() => {
  return {
    host: "www.example.com",
    method: "GET",
    path: "/helloworld",
    scheme: "https",
    query: "param1=value1&param2=value2",
    url: "/helloworld?param1=value1&param2=value2",
    userLocation: new UserLocation(),
    device: new Device(),
    cpCode: 1191398,
    cacheKey: new CacheKey(),
    respondWith: mockRespondWith,
    getHeader: mockGetHeader,
    setHeader: mockSetHeader,
    addHeader: mockAddHeader,
    removeHeader: mockRemoveHeader,
    getHeaders: mockGetHeaders,
    getVariable: mockGetVariable,
    setVariable: mockSetVariable,
    route: mockRoute
    };
});

export default Request;