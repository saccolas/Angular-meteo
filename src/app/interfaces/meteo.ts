export interface Meteo {
    
        latitude: number;
        longitude: number;
        generationtime_ms: number;
        utc_offset_seconds: number;
        elevation: number;
        hourly_units: {
            time: string;
            temperature_2m: string;
        }
        hourly: {
            time: string;
            temperature_2m: number;
        }
    
}

 interface Hourly {
    time: string;
    temperature_2m: number;
 }