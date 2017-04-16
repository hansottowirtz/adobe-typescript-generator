/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ColorModel extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.ColorModel}
			 * @readonly
			 */
			public static readonly CMYK: Adobe.Photoshop.ColorModel;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.ColorModel}
			 * @readonly
			 */
			public static readonly GRAYSCALE: Adobe.Photoshop.ColorModel;
			/**
			 * @type {Adobe.Photoshop.ColorModel}
			 * @readonly
			 */
			public static readonly HSB: Adobe.Photoshop.ColorModel;
			/**
			 * @type {Adobe.Photoshop.ColorModel}
			 * @readonly
			 */
			public static readonly LAB: Adobe.Photoshop.ColorModel;
			/**
			 * @type {Adobe.Photoshop.ColorModel}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Photoshop.ColorModel;
			/**
			 * @type {Adobe.Photoshop.ColorModel}
			 * @readonly
			 */
			public static readonly RGB: Adobe.Photoshop.ColorModel;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}