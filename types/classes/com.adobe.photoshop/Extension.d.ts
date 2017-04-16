/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Extension extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.Extension}
			 * @readonly
			 */
			public static readonly LOWERCASE: Adobe.Photoshop.Extension;
			/**
			 * @type {Adobe.Photoshop.Extension}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Photoshop.Extension;
			/**
			 * @type {Adobe.Photoshop.Extension}
			 * @readonly
			 */
			public static readonly UPPERCASE: Adobe.Photoshop.Extension;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}