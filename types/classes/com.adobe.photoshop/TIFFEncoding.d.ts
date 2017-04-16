/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class TIFFEncoding extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.TIFFEncoding}
			 * @readonly
			 */
			public static readonly JPEG: Adobe.Photoshop.TIFFEncoding;
			/**
			 * @type {Adobe.Photoshop.TIFFEncoding}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Photoshop.TIFFEncoding;
			/**
			 * @type {Adobe.Photoshop.TIFFEncoding}
			 * @readonly
			 */
			public static readonly TIFFLZW: Adobe.Photoshop.TIFFEncoding;
			/**
			 * @type {Adobe.Photoshop.TIFFEncoding}
			 * @readonly
			 */
			public static readonly TIFFZIP: Adobe.Photoshop.TIFFEncoding;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}