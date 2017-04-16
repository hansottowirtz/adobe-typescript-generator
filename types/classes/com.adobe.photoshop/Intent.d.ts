/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Intent extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.Intent}
			 * @readonly
			 */
			public static readonly ABSOLUTECOLORIMETRIC: Adobe.Photoshop.Intent;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.Intent}
			 * @readonly
			 */
			public static readonly PERCEPTUAL: Adobe.Photoshop.Intent;
			/**
			 * @type {Adobe.Photoshop.Intent}
			 * @readonly
			 */
			public static readonly RELATIVECOLORIMETRIC: Adobe.Photoshop.Intent;
			/**
			 * @type {Adobe.Photoshop.Intent}
			 * @readonly
			 */
			public static readonly SATURATION: Adobe.Photoshop.Intent;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}