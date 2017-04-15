/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PaintingCursors extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * Displays cursors as brush shapes representing the size of 
			 * the current brush. Valid only for painting cursors. Brush 
			 * size cursors may not appear for very large brushes.
			 */
			public static readonly BRUSHSIZE: Adobe.Photoshop.PaintingCursors;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Displays pointers as cross hairs. */
			public static readonly PRECISE: Adobe.Photoshop.PaintingCursors;
			/** Displays pointers as tool icons. */
			public static readonly STANDARD: Adobe.Photoshop.PaintingCursors;
			/** Constructor */
			public constructor();
		}
	}
}