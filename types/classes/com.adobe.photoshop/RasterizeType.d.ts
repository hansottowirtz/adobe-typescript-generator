/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class RasterizeType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.RasterizeType}
			 * @readonly
			 */
			public static readonly ENTIRELAYER: Adobe.Photoshop.RasterizeType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.RasterizeType}
			 * @readonly
			 */
			public static readonly FILLCONTENT: Adobe.Photoshop.RasterizeType;
			/**
			 * @type {Adobe.Photoshop.RasterizeType}
			 * @readonly
			 */
			public static readonly LAYERCLIPPINGPATH: Adobe.Photoshop.RasterizeType;
			/**
			 * @type {Adobe.Photoshop.RasterizeType}
			 * @readonly
			 */
			public static readonly LINKEDLAYERS: Adobe.Photoshop.RasterizeType;
			/**
			 * @type {Adobe.Photoshop.RasterizeType}
			 * @readonly
			 */
			public static readonly SHAPE: Adobe.Photoshop.RasterizeType;
			/**
			 * @type {Adobe.Photoshop.RasterizeType}
			 * @readonly
			 */
			public static readonly TEXTCONTENTS: Adobe.Photoshop.RasterizeType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}