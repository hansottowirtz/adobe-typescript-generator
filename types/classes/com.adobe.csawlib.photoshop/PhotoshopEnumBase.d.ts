/// <reference path="../../packages/com.adobe.csawlib.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace CsawlibPhotoshop {
		/** Base for all enum-representing classes */
		class PhotoshopEnumBase extends Adobe.Csawlib.CSEnumBase {
			/** Returns the object value */
			public readonly value: any;
			public constructor();
		}
	}
}