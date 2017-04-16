/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class TextComposer extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.TextComposer}
			 * @readonly
			 */
			public static readonly ADOBEEVERYLINE: Adobe.Photoshop.TextComposer;
			/**
			 * @type {Adobe.Photoshop.TextComposer}
			 * @readonly
			 */
			public static readonly ADOBESINGLELINE: Adobe.Photoshop.TextComposer;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}