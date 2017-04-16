/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class GridSize extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.GridSize}
			 * @readonly
			 */
			public static readonly LARGE: Adobe.Photoshop.GridSize;
			/**
			 * @type {Adobe.Photoshop.GridSize}
			 * @readonly
			 */
			public static readonly MEDIUM: Adobe.Photoshop.GridSize;
			/**
			 * @type {Adobe.Photoshop.GridSize}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Photoshop.GridSize;
			/**
			 * @type {Adobe.Photoshop.GridSize}
			 * @readonly
			 */
			public static readonly SMALL: Adobe.Photoshop.GridSize;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}