/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ColorSpaceType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.ColorSpaceType}
			 * @readonly
			 */
			public static readonly ADOBERGB: Adobe.Photoshop.ColorSpaceType;
			/**
			 * @type {Adobe.Photoshop.ColorSpaceType}
			 * @readonly
			 */
			public static readonly COLORMATCHRGB: Adobe.Photoshop.ColorSpaceType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.ColorSpaceType}
			 * @readonly
			 */
			public static readonly PROPHOTORGB: Adobe.Photoshop.ColorSpaceType;
			/**
			 * @type {Adobe.Photoshop.ColorSpaceType}
			 * @readonly
			 */
			public static readonly SRGB: Adobe.Photoshop.ColorSpaceType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}