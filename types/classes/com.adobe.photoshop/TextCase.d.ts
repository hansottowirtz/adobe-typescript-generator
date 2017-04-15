/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The capitalization to use. */
		class TextCase extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Uses all uppercase letters. */
			public static readonly ALLCAPS: Adobe.Photoshop.TextCase;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses uppercase and lowercase letters. */
			public static readonly NORMAL: Adobe.Photoshop.TextCase;
			/** Uses small caps for lowercase letters. */
			public static readonly SMALLCAPS: Adobe.Photoshop.TextCase;
			/** Constructor */
			public constructor();
		}
	}
}