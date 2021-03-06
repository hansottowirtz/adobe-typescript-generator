/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TilingTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for AUTO. Automatically calculates the number of tiles 
			 * required, including the overlap. For information, see tiling 
			 * overlap.
			 * @type {Adobe.Indesign.TilingTypes}
			 * @readonly
			 */
			public static readonly auto: Adobe.Indesign.TilingTypes;
			/**
			 * Automatically calculates the number of tiles required, 
			 * including the overlap. For information, see tiling overlap.
			 * @type {Adobe.Indesign.TilingTypes}
			 * @readonly
			 */
			public static readonly AUTO: Adobe.Indesign.TilingTypes;
			/**
			 * Increases the amount of overlap as necessary so that the 
			 * right sides of the right-most tiles are aligned at the right 
			 * edge of the document page, and the bottom sides of the 
			 * bottom-most tiles are aligned at the bottom edge of the 
			 * document page. For information, see tiling overlap.
			 * @type {Adobe.Indesign.TilingTypes}
			 * @readonly
			 */
			public static readonly AUTO_JUSTIFIED: Adobe.Indesign.TilingTypes;
			/**
			 * Alias for AUTO_JUSTIFIED. Increases the amount of overlap as 
			 * necessary so that the right sides of the right-most tiles 
			 * are aligned at the right edge of the document page, and the 
			 * bottom sides of the bottom-most tiles are aligned at the 
			 * bottom edge of the document page. For information, see 
			 * tiling overlap.
			 * @type {Adobe.Indesign.TilingTypes}
			 * @readonly
			 */
			public static readonly autoJustified: Adobe.Indesign.TilingTypes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for MANUAL. Prints a single tile whose upper left 
			 * corner is at the zero point of the rulers.
			 * @type {Adobe.Indesign.TilingTypes}
			 * @readonly
			 */
			public static readonly manual: Adobe.Indesign.TilingTypes;
			/**
			 * Prints a single tile whose upper left corner is at the zero 
			 * point of the rulers.
			 * @type {Adobe.Indesign.TilingTypes}
			 * @readonly
			 */
			public static readonly MANUAL: Adobe.Indesign.TilingTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}