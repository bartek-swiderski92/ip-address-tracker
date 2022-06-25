export interface IpResponse {
    ip: string;
    lat: string;
    lng: string;
    city?: string;
    region?: string;
    country?: string;
    timezone: string;
    isp: string;
}