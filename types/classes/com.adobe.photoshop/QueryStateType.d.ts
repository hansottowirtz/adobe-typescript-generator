/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class QueryStateType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Always maximize compatibility. */
			public static readonly ALWAYS: Adobe.Photoshop.QueryStateType;
			/** Always ask about maximize compatibility. */
			public static readonly ASK: Adobe.Photoshop.QueryStateType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Never ask about maximize compatibility. */
			public static readonly NEVER: Adobe.Photoshop.QueryStateType;
			/** Constructor */
			public constructor();
		}
	}
}