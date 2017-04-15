/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class OtherPaintingCursors extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Displays pointers as cross hairs. */
			public static readonly PRECISEOTHER: Adobe.Photoshop.OtherPaintingCursors;
			/** Displays pointers as tool icons. */
			public static readonly STANDARDOTHER: Adobe.Photoshop.OtherPaintingCursors;
			/** Constructor */
			public constructor();
		}
	}
}