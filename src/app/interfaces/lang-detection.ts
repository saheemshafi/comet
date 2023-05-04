export interface RootDetection {
    data: Data;
   }
   
   export interface Data {
    detections: Array<Detection[]>;
   }
   
   export interface Detection {
    confidence: number;
    isReliable: boolean;
    language:   string;
   }
   