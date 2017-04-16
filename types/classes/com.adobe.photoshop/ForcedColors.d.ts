/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ForcedColors extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.ForcedColors}
			 * @readonly
			 */
			public static readonly BLACKWHITE: Adobe.Photoshop.ForcedColors;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.ForcedColors}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Photoshop.ForcedColors;
			/**
			 * @type {Adobe.Photoshop.ForcedColors}
			 * @readonly
			 */
			public static readonly PRIMARIES: Adobe.Photoshop.ForcedColors;
			/**
			 * @type {Adobe.Photoshop.ForcedColors}
			 * @readonly
			 */
			public static readonly WEB: Adobe.Photoshop.ForcedColors;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}