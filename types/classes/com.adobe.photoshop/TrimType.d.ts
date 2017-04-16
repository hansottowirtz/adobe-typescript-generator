/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class TrimType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.TrimType}
			 * @readonly
			 */
			public static readonly BOTTOMRIGHT: Adobe.Photoshop.TrimType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.TrimType}
			 * @readonly
			 */
			public static readonly TOPLEFT: Adobe.Photoshop.TrimType;
			/**
			 * @type {Adobe.Photoshop.TrimType}
			 * @readonly
			 */
			public static readonly TRANSPARENT: Adobe.Photoshop.TrimType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}