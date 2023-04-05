import MapKit

@objc(LocationAutocomplete)
class LocationAutocomplete: NSObject {
    
    @objc(getAddressSuggestions:withResolver:withRejecter:)
    func getAddressSuggestions(text: String, resolve:@escaping RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        
        let searchRequest = MKLocalSearch.Request()
        searchRequest.naturalLanguageQuery = text
        let search = MKLocalSearch(request: searchRequest)
        
        var result: [[String: Any]] = []
        
        search.start { response, error in
            guard let response = response else {
                print("Error: \(error?.localizedDescription ?? "Unknown error").")
                return
            }
            
            for item in response.mapItems {
                guard let title = item.placemark.title else { continue }
                result.append(
                    [
                        "title": title,
                        "coordinate": [
                            "longitude": item.placemark.coordinate.longitude as Double,
                            "latitude": item.placemark.coordinate.latitude as Double
                        ],
                    ]
                )
            }
            resolve(result)
        }
    }
}
