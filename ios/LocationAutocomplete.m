#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(LocationAutocomplete, NSObject)

RCT_EXTERN_METHOD(getAddressSuggestions:(NSString)text 
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
