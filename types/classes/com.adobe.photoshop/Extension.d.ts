/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The formatting for the filename extension. */
		class Extension extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The extension is in lowercase letters. */
			public static readonly LOWERCASE: Adobe.Photoshop.Extension;
			/** Does not use an extension. */
			public static readonly NONE: Adobe.Photoshop.Extension;
			/** The extension is in uppercase letters. */
			public static readonly UPPERCASE: Adobe.Photoshop.Extension;
			/** Constructor */
			public constructor();
		}
	}
}