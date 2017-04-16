/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class OpenDocumentMode extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.OpenDocumentMode}
			 * @readonly
			 */
			public static readonly CMYK: Adobe.Photoshop.OpenDocumentMode;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.OpenDocumentMode}
			 * @readonly
			 */
			public static readonly GRAYSCALE: Adobe.Photoshop.OpenDocumentMode;
			/**
			 * @type {Adobe.Photoshop.OpenDocumentMode}
			 * @readonly
			 */
			public static readonly LAB: Adobe.Photoshop.OpenDocumentMode;
			/**
			 * @type {Adobe.Photoshop.OpenDocumentMode}
			 * @readonly
			 */
			public static readonly RGB: Adobe.Photoshop.OpenDocumentMode;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}