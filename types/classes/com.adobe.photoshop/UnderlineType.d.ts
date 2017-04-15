/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class UnderlineType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * (For vertical type) The underline is to the left of the 
			 * text.
			 */
			public static readonly UNDERLINELEFT: Adobe.Photoshop.UnderlineType;
			/** No underline. */
			public static readonly UNDERLINEOFF: Adobe.Photoshop.UnderlineType;
			/**
			 * (For vertical type) The underline is to the right of the 
			 * text.
			 */
			public static readonly UNDERLINERIGHT: Adobe.Photoshop.UnderlineType;
			/** Constructor */
			public constructor();
		}
	}
}