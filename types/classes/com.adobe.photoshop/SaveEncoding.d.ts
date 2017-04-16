/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SaveEncoding extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.SaveEncoding}
			 * @readonly
			 */
			public static readonly ASCII: Adobe.Photoshop.SaveEncoding;
			/**
			 * @type {Adobe.Photoshop.SaveEncoding}
			 * @readonly
			 */
			public static readonly BINARY: Adobe.Photoshop.SaveEncoding;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.SaveEncoding}
			 * @readonly
			 */
			public static readonly JPEGHIGH: Adobe.Photoshop.SaveEncoding;
			/**
			 * @type {Adobe.Photoshop.SaveEncoding}
			 * @readonly
			 */
			public static readonly JPEGLOW: Adobe.Photoshop.SaveEncoding;
			/**
			 * @type {Adobe.Photoshop.SaveEncoding}
			 * @readonly
			 */
			public static readonly JPEGMAXIMUM: Adobe.Photoshop.SaveEncoding;
			/**
			 * @type {Adobe.Photoshop.SaveEncoding}
			 * @readonly
			 */
			public static readonly JPEGMEDIUM: Adobe.Photoshop.SaveEncoding;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}