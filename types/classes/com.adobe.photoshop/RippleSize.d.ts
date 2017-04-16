/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class RippleSize extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.RippleSize}
			 * @readonly
			 */
			public static readonly LARGE: Adobe.Photoshop.RippleSize;
			/**
			 * @type {Adobe.Photoshop.RippleSize}
			 * @readonly
			 */
			public static readonly MEDIUM: Adobe.Photoshop.RippleSize;
			/**
			 * @type {Adobe.Photoshop.RippleSize}
			 * @readonly
			 */
			public static readonly SMALL: Adobe.Photoshop.RippleSize;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}