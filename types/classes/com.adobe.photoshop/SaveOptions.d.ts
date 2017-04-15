/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SaveOptions extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Do not save changes. */
			public static readonly DONOTSAVECHANGES: Adobe.Photoshop.SaveOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Ask the user whether to save. */
			public static readonly PROMPTTOSAVECHANGES: Adobe.Photoshop.SaveOptions;
			/** Save changes. */
			public static readonly SAVECHANGES: Adobe.Photoshop.SaveOptions;
			/** Constructor */
			public constructor();
		}
	}
}