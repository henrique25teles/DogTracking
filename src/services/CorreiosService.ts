import { RastroJS, Tracking } from 'rastrojs';

class CorreiosTrack extends RastroJS {

    constructor(codes: string[]) {
        super();
        this.trackingCodes = codes
    }

    trackingCodes: string[] = [];

    tracks(): Promise<Tracking[]> {
        return this.track(this.trackingCodes)
    }

    
}

export default class CorreiosService {
    static TrackCorreiosOrder(code: string): Tracking {
        try {
            const correiosTrack = new CorreiosTrack([code])
    
            let track: Tracking
            correiosTrack
                .tracks()
                .then(tracks =>  {
                    track = tracks[0]
                })
    
            return track
        } catch (error) {
            const trackingWithError : Tracking = {
                code,
                isInvalid: true
            }
            
            return trackingWithError
        }
    }

    static TrackCorreiosMultipleOrders(codes: string[]) : Tracking[] {
        try {
            const correiosTrack = new CorreiosTrack(codes)
    
            let tracks : Tracking[]
            correiosTrack
                .tracks()
                .then(tracking => tracks = tracking)
    
            return tracks
        } catch(error) {
            let errorTracking : Tracking[]
            codes.forEach(value => {
                const trackingWithError : Tracking = {
                    code: value,
                    isInvalid: true
                }

                errorTracking.push(trackingWithError)

                return errorTracking
            })
        }
    }

}