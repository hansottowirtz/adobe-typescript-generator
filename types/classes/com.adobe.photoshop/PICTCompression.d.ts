/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PICTCompression extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.PICTCompression}
			 * @readonly
			 */
			public static readonly JPEGHIGHPICT: Adobe.Photoshop.PICTCompression;
			/**
			 * @type {Adobe.Photoshop.PICTCompression}
			 * @readonly
			 */
			public static readonly JPEGLOWPICT: Adobe.Photoshop.PICTCompression;
			/**
			 * @type {Adobe.Photoshop.PICTCompression}
			 * @readonly
			 */
			public static readonly JPEGMAXIMUMPICT: Adobe.Photoshop.PICTCompression;
			/**
			 * @type {Adobe.Photoshop.PICTCompression}
			 * @readonly
			 */
			public static readonly JPEGMEDIUMPICT: Adobe.Photoshop.PICTCompression;
			/**
			 * @type {Adobe.Photoshop.PICTCompression}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Photoshop.PICTCompression;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}