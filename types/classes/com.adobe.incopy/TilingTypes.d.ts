/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TilingTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for AUTO. Automatically calculates the number of tiles 
			 * required, including the overlap. For information, see tiling 
			 * overlap.
			 */
			public static readonly auto: Adobe.Incopy.TilingTypes;
			/**
			 * Automatically calculates the number of tiles required, 
			 * including the overlap. For information, see tiling overlap.
			 */
			public static readonly AUTO: Adobe.Incopy.TilingTypes;
			/**
			 * Increases the amount of overlap as necessary so that the 
			 * right sides of the right-most tiles are aligned at the right 
			 * edge of the document page, and the bottom sides of the 
			 * bottom-most tiles are aligned at the bottom edge of the 
			 * document page. For information, see tiling overlap.
			 */
			public static readonly AUTO_JUSTIFIED: Adobe.Incopy.TilingTypes;
			/**
			 * Alias for AUTO_JUSTIFIED. Increases the amount of overlap as 
			 * necessary so that the right sides of the right-most tiles 
			 * are aligned at the right edge of the document page, and the 
			 * bottom sides of the bottom-most tiles are aligned at the 
			 * bottom edge of the document page. For information, see 
			 * tiling overlap.
			 */
			public static readonly autoJustified: Adobe.Incopy.TilingTypes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for MANUAL. Prints a single tile whose upper left 
			 * corner is at the zero point of the rulers.
			 */
			public static readonly manual: Adobe.Incopy.TilingTypes;
			/**
			 * Prints a single tile whose upper left corner is at the zero 
			 * point of the rulers.
			 */
			public static readonly MANUAL: Adobe.Incopy.TilingTypes;
			/** Constructor */
			public constructor();
		}
	}
}