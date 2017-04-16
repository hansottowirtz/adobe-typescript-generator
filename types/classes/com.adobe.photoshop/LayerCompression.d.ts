/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class LayerCompression extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.LayerCompression}
			 * @readonly
			 */
			public static readonly RLE: Adobe.Photoshop.LayerCompression;
			/**
			 * @type {Adobe.Photoshop.LayerCompression}
			 * @readonly
			 */
			public static readonly ZIP: Adobe.Photoshop.LayerCompression;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}