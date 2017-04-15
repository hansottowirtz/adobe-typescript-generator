/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * The pointer for the following tools: Eraser, Pencil, 
		 * Paintbrush, Healing Brush, Rubber Stamp, Pattern Stamp, 
		 * Smudge, Blur, Sharpen, Dodge, Burn, Sponge.
		 */
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