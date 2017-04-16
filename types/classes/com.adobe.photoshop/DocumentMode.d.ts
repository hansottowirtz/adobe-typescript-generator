/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class DocumentMode extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.DocumentMode}
			 * @readonly
			 */
			public static readonly BITMAP: Adobe.Photoshop.DocumentMode;
			/**
			 * @type {Adobe.Photoshop.DocumentMode}
			 * @readonly
			 */
			public static readonly CMYK: Adobe.Photoshop.DocumentMode;
			/**
			 * @type {Adobe.Photoshop.DocumentMode}
			 * @readonly
			 */
			public static readonly DUOTONE: Adobe.Photoshop.DocumentMode;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.DocumentMode}
			 * @readonly
			 */
			public static readonly GRAYSCALE: Adobe.Photoshop.DocumentMode;
			/**
			 * @type {Adobe.Photoshop.DocumentMode}
			 * @readonly
			 */
			public static readonly INDEXEDCOLOR: Adobe.Photoshop.DocumentMode;
			/**
			 * @type {Adobe.Photoshop.DocumentMode}
			 * @readonly
			 */
			public static readonly LAB: Adobe.Photoshop.DocumentMode;
			/**
			 * @type {Adobe.Photoshop.DocumentMode}
			 * @readonly
			 */
			public static readonly MULTICHANNEL: Adobe.Photoshop.DocumentMode;
			/**
			 * @type {Adobe.Photoshop.DocumentMode}
			 * @readonly
			 */
			public static readonly RGB: Adobe.Photoshop.DocumentMode;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}