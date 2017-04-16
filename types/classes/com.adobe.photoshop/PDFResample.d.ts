/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PDFResample extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.PDFResample}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Photoshop.PDFResample;
			/**
			 * @type {Adobe.Photoshop.PDFResample}
			 * @readonly
			 */
			public static readonly PDFAVERAGE: Adobe.Photoshop.PDFResample;
			/**
			 * @type {Adobe.Photoshop.PDFResample}
			 * @readonly
			 */
			public static readonly PDFBICUBIC: Adobe.Photoshop.PDFResample;
			/**
			 * @type {Adobe.Photoshop.PDFResample}
			 * @readonly
			 */
			public static readonly PDFSUBSAMPLE: Adobe.Photoshop.PDFResample;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}