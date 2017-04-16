/// <reference path="../../packages/com.adobe.csawlib/index.d.ts"/>

declare namespace Adobe {
	namespace Csawlib {
		/** Base for all enum-representing classes */
		class CSEnumBase extends Adobe.Csawlib.CSHostObject {
			/** Returns the numerical value */
			public readonly value: any;
			/** Constructor */
			public constructor();
		}
	}
}