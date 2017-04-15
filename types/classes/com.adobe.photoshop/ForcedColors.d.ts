/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The colors whose inclusion to force in the color table. */
		class ForcedColors extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Forces pure black and white. */
			public static readonly BLACKWHITE: Adobe.Photoshop.ForcedColors;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** No forced colors. */
			public static readonly NONE: Adobe.Photoshop.ForcedColors;
			/**
			 * Forces red, green, blue, cyan, magenta, yellow, black, and 
			 * white.
			 */
			public static readonly PRIMARIES: Adobe.Photoshop.ForcedColors;
			/** Forces the 216 web-safe colors. */
			public static readonly WEB: Adobe.Photoshop.ForcedColors;
			/** Constructor */
			public constructor();
		}
	}
}