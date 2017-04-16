/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class GridLineStyle extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.GridLineStyle}
			 * @readonly
			 */
			public static readonly DASHED: Adobe.Photoshop.GridLineStyle;
			/**
			 * @type {Adobe.Photoshop.GridLineStyle}
			 * @readonly
			 */
			public static readonly DOTTED: Adobe.Photoshop.GridLineStyle;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.GridLineStyle}
			 * @readonly
			 */
			public static readonly SOLID: Adobe.Photoshop.GridLineStyle;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}