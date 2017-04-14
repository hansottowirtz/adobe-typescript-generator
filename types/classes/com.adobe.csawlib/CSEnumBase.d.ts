/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.csawlib/index.d.ts"/>
declare namespace Adobe {
	namespace Csawlib {
		class CSEnumBase extends Adobe.Csawlib.CSHostObject {
			/** Returns the numerical value */
			public readonly value: any;
			/** Constructor */
			public constructor(delegateHostObject: HostObject, _enum: number);
		}
	}
}