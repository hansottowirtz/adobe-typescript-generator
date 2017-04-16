/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class FontSize extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.FontSize}
			 * @readonly
			 */
			public static readonly LARGE: Adobe.Photoshop.FontSize;
			/**
			 * @type {Adobe.Photoshop.FontSize}
			 * @readonly
			 */
			public static readonly MEDIUM: Adobe.Photoshop.FontSize;
			/**
			 * @type {Adobe.Photoshop.FontSize}
			 * @readonly
			 */
			public static readonly SMALL: Adobe.Photoshop.FontSize;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}