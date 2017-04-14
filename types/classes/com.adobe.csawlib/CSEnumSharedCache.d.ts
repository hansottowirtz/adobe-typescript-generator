/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.csawlib/index.d.ts"/>
declare namespace Adobe {
	namespace Csawlib {
		class CSEnumSharedCache {
			/** Getter for the class object on the host */
			public readonly hostClassObject: HostObject;
			/** constructor */
			public constructor(enumClass: any, className: string);
			/** Return enumeration Object for passed value */
			public getEnumObject(inboundValue: number, inboundName: string): any;
		}
	}
}