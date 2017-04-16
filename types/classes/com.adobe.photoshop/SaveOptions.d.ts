/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SaveOptions extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly DONOTSAVECHANGES: Adobe.Photoshop.SaveOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly PROMPTTOSAVECHANGES: Adobe.Photoshop.SaveOptions;
			public static readonly SAVECHANGES: Adobe.Photoshop.SaveOptions;
			/** Constructor */
			public constructor();
		}
	}
}