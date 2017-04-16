/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class QueryStateType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly ALWAYS: Adobe.Photoshop.QueryStateType;
			public static readonly ASK: Adobe.Photoshop.QueryStateType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly NEVER: Adobe.Photoshop.QueryStateType;
			/** Constructor */
			public constructor();
		}
	}
}