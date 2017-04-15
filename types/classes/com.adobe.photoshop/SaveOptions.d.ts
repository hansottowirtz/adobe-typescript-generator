/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Options for saving a file. */
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