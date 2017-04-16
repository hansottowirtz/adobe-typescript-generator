/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class TextCase extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.TextCase}
			 * @readonly
			 */
			public static readonly ALLCAPS: Adobe.Photoshop.TextCase;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.TextCase}
			 * @readonly
			 */
			public static readonly NORMAL: Adobe.Photoshop.TextCase;
			/**
			 * @type {Adobe.Photoshop.TextCase}
			 * @readonly
			 */
			public static readonly SMALLCAPS: Adobe.Photoshop.TextCase;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}